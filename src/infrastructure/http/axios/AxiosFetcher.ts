import {
  HttpError,
  HttpStatusCode,
} from '@/infrastructure/http/core/HttpError';
import {
  IHttpFetcher,
  IHttpResponse,
} from '@/infrastructure/http/core/IHttpFetcher';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

type ErrorResponseInterceptor<D> = (error: HttpError<D>) => HttpError<D>;

type AxiosFetcherConfig<T, D> = {
  baseUrl: string;
  customHeader?: Record<string, string>;
  requestInterceptor?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  successResponseInterceptor?: (
    response: AxiosResponse<T>,
  ) => Promise<AxiosResponse<T>>;
  errorResponseInterceptor?: ErrorResponseInterceptor<D>;
};

export default class AxiosFetcher<T, D>
  implements IHttpFetcher<AxiosRequestConfig>
{
  private readonly service: AxiosInstance;
  private errorMessage?: string;

  constructor(config: AxiosFetcherConfig<T, D>) {
    this.service = axios.create({
      baseURL: config.baseUrl,
      headers: config.customHeader,
    });
    this.service.interceptors.request.use(config.requestInterceptor);
    this.service.interceptors.response.use(
      config.successResponseInterceptor,
      this.createErrorInterceptor(config.errorResponseInterceptor),
    );
  }

  private createErrorInterceptor(interceptor?: ErrorResponseInterceptor<D>) {
    return (error: AxiosError<D>) => {
      const httpError = this.createHttpError(error);
      return Promise.reject(interceptor ? interceptor(httpError) : httpError);
    };
  }

  private createHttpError(error: AxiosError<D>): HttpError<D> {
    const statusCode = error.response?.status as HttpStatusCode;

    return new HttpError(
      this.errorMessage ? this.errorMessage : error.message ?? '',
      statusCode,
      error.response?.data,
    );
  }

  public async get<T = unknown, D = unknown>(
    url: string,
    queryParams: D,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;
    const newConfig = {
      ...config,
      params: queryParams,
    };
    const response = await this.service.get<T>(url, newConfig);
    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  public async post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;
    const response = await this.service.post<T>(url, data, config);
    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  public async put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;
    const response = await this.service.put<T>(url, data, config);
    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  public async patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;
    const response = await this.service.patch<T>(url, data, config);
    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  public async delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>> {
    this.errorMessage = errorMessage;
    const response = await this.service.delete<T>(url, config);
    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
