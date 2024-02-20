import { HttpError, HttpStatusCode } from '@/infra/http/core/HttpError';
import { IHttpFetcher, IHttpResponse } from '@/infra/http/core/IHttpFetcher';

type ErrorResponseInterceptor<D> = (error: HttpError<D>) => HttpError<D>;

type FetcherConfig<T, D> = {
  baseUrl: string;
  customHeader?: Record<string, string>;
  requestInterceptor?: (config: RequestInit) => RequestInit;
  successResponseInterceptor?: (response: Response) => Promise<Response>;
  errorResponseInterceptor?: ErrorResponseInterceptor<D>;
};

export default class Fetcher<T, D> implements IHttpFetcher<RequestInit> {
  private readonly baseUrl: string;
  private customHeader?: Record<string, string>;
  private errorMessage?: string;
  private requestInterceptor?: (config: RequestInit) => RequestInit;
  private successResponseInterceptor?: (
    response: Response,
  ) => Promise<Response>;
  private errorResponseInterceptor?: ErrorResponseInterceptor<D>;

  constructor(config: FetcherConfig<T, D>) {
    this.baseUrl = config.baseUrl;
    this.customHeader = config.customHeader;
    this.requestInterceptor = config.requestInterceptor;
    this.successResponseInterceptor = config.successResponseInterceptor;
    this.errorResponseInterceptor = config.errorResponseInterceptor;
  }

  private runErrorInterceptor(error: HttpError<D>) {
    return Promise.reject(
      this.errorResponseInterceptor
        ? this.errorResponseInterceptor(error)
        : error,
    );
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
    const fullUrl = this.makeUrl(url, queryParams as Record<string, any>);

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
        const handledResponse = await this.successResponseInterceptor?.(
          response,
        );
        const responseJson = handledResponse
          ? await handledResponse.json()
          : await response.json();

        return {
          statusCode: response.status,
          body: responseJson,
        };
      }
      const error = await this.createHttpError(response);
      throw error;
    } catch (error) {
      if (error instanceof HttpError) {
        return this.runErrorInterceptor(error);
      }
      return Promise.reject(error);
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

    const options: RequestInit = {
      ...data,
      method: 'POST',
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
        const handledResponse = await this.successResponseInterceptor?.(
          response,
        );
        const responseJson = handledResponse
          ? await handledResponse.json()
          : await response.json();

        return {
          statusCode: response.status,
          body: responseJson,
        };
      }
      const error = await this.createHttpError(response);
      throw error;
    } catch (error) {
      if (error instanceof HttpError) {
        return this.runErrorInterceptor(error);
      }
      return Promise.reject(error);
    }
  }

  public async put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const options: RequestInit = {
      ...data,
      method: 'PUT',
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
        const handledResponse = await this.successResponseInterceptor?.(
          response,
        );
        const responseJson = handledResponse
          ? await handledResponse.json()
          : await response.json();

        return {
          statusCode: response.status,
          body: responseJson,
        };
      }
      const error = await this.createHttpError(response);
      throw error;
    } catch (error) {
      if (error instanceof HttpError) {
        return this.runErrorInterceptor(error);
      }
      return Promise.reject(error);
    }
  }

  public async patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const options: RequestInit = {
      ...data,
      method: 'PATCH',
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
        const handledResponse = await this.successResponseInterceptor?.(
          response,
        );
        const responseJson = handledResponse
          ? await handledResponse.json()
          : await response.json();

        return {
          statusCode: response.status,
          body: responseJson,
        };
      }
      const error = await this.createHttpError(response);
      throw error;
    } catch (error) {
      if (error instanceof HttpError) {
        return this.runErrorInterceptor(error);
      }
      return Promise.reject(error);
    }
  }

  public async delete<T = unknown>(
    url: string,
    config?: RequestInit,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;

    const fullUrl = this.makeUrl(url);

    const options: RequestInit = {
      method: 'DELETE',
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
        const handledResponse = await this.successResponseInterceptor?.(
          response,
        );
        const responseJson = handledResponse
          ? await handledResponse.json()
          : await response.json();

        return {
          statusCode: response.status,
          body: responseJson,
        };
      }
      const error = await this.createHttpError(response);
      throw error;
    } catch (error) {
      if (error instanceof HttpError) {
        return this.runErrorInterceptor(error);
      }
      return Promise.reject(error);
    }
  }
}
