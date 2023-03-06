import { AxiosError } from 'axios';

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  redirect = 301,
  found = 302,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  conflict = 409,
  unprocessable = 422,
  serverError = 500,
}

export type IHttpFetchError = AxiosError | Error;

export interface IHttpFetcher<RequestConfig> {
  handleError(error: unknown, message?: string): never;
  request<T = unknown>(
    config: RequestConfig,
    errorMessage?: string,
  ): Promise<T>;
  get<T = unknown>(
    url: string,
    config?: RequestConfig,
    errorMessage?: string,
  ): Promise<T>;
  post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestConfig,
    errorMessage?: string,
  ): Promise<T>;
  put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestConfig,
    errorMessage?: string,
  ): Promise<T>;
  patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: RequestConfig,
    errorMessage?: string,
  ): Promise<T>;
  delete<T = unknown>(url: string, config?: RequestConfig): Promise<T>;
}
