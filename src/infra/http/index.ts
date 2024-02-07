import {
  HttpError,
  HttpStatusCode,
} from '@/infra/http/core/HttpError';
import {
  IHttpFetcher,
  IHttpResponse,
} from '@/infra/http/core/IHttpFetcher';

type ErrorResponseInterceptor<D> = (error: HttpError<D>) => HttpError<D>;

type FetcherConfig<T, D> = {
  baseUrl: string;
  customHeader?: Record<string, string>;
  requestInterceptor?: (config: RequestInit) => RequestInit;
  successResponseInterceptor?: (
    response: Response,
  ) => Promise<T | Response>;
  errorResponseInterceptor?: ErrorResponseInterceptor<D>;
};

export default class Fetcher<T, D> implements IHttpFetcher<RequestInit> {
  private readonly baseUrl: string;
  private customHeader?: Record<string, string>;
  private errorMessage?: string;
  private requestInterceptor?: (config: RequestInit) => RequestInit;
  private successResponseInterceptor?: (
    response: Response,
  ) => Promise<T | Response>;
  private errorResponseInterceptor?: ErrorResponseInterceptor<D>;

  constructor(config: FetcherConfig<T, D>) {
    this.baseUrl = config.baseUrl;
    this.customHeader = config.customHeader;
    this.requestInterceptor = config.requestInterceptor;
    this.successResponseInterceptor = config.successResponseInterceptor;
    this.errorResponseInterceptor = config.errorResponseInterceptor;
  }


  private createErrorInterceptor(interceptor?: ErrorResponseInterceptor<D>) {
    return async (error: HttpError<D>) => {
      return Promise.reject(interceptor ? interceptor(error) : error);
    };
  }

  private async createHttpError(response: Response): Promise<HttpError<D>> {
    const data = await response.json();
    const statusCode = response.status as HttpStatusCode;

    return new HttpError(data.message ?? '', statusCode, data);
  }

  private makeUrl(endpoint: string, queryParams?: Record<string, any>) {
    const searchParams = new URLSearchParams(queryParams);

    const url = new URL(`${this.baseUrl}${endpoint}`);

    url.search = searchParams.toString();

    return url;
  }

  public async get<T = unknown, D = unknown>(
    url: string,
    queryParams: D,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;
    const fullUrl = this.makeUrl(url, queryParams as {});

    const options: RequestInit = {
      method: 'GET',
      headers: {
        ...this.customHeader,
        ...(config?.headers || {}),
      },
      ...config,
    };

    const request = this.requestInterceptor
      ? this.requestInterceptor(options)
      : options;

    try {
      const response = await fetch(fullUrl, request);

      if (response.ok) {
        const responseBody = this.successResponseInterceptor
          ? await this.successResponseInterceptor(response)
          : await response.json();

        return {
          statusCode: response.status,
          body: responseBody,
        };
      } else {
        throw await this.createHttpError(response);
      }
    } catch (error) {
      throw error;
    }
  }

  public async post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const response = await fetch(fullUrl, {
      ...data,
      method: 'POST',
    });

    return {
      statusCode: response.status,
      body: await response.json(),
    };
  }

  public async put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const response = await fetch(fullUrl, {
      ...data,
      method: 'PUT',
    });

    return {
      statusCode: response.status,
      body: await response.json(),
    };
  }

  public async patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const response = await fetch(fullUrl, {
      ...data,
      method: 'PATCH',
    });

    return {
      statusCode: response.status,
      body: await response.json(),
    };
  }

  public async delete<T = unknown>(
    url: string,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const response = await fetch(fullUrl, {
      ...config,
      method: 'DELETE',
    });

    return {
      statusCode: response.status,
      body: await response.json(),
    };
  }
}
