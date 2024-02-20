export type IHttpResponse<T = unknown> = {
  statusCode: number;
  body: T;
};

export interface IHttpFetcher<IRequestConfig> {
  get<T = unknown, R = unknown>(
    url: string,
    queryParams?: R,
    config?: IRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>>;
  post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: IRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>>;
  put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: IRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>>;
  patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: IRequestConfig,
    errorMessage?: string,
  ): Promise<IHttpResponse<T>>;
  delete<T = unknown>(
    url: string,
    config?: IRequestConfig,
  ): Promise<IHttpResponse<T>>;
}
