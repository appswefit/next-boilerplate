import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import { IHttpFetcher } from './HttpFetcher';

export default class AxiosFetcher implements IHttpFetcher<AxiosRequestConfig> {
  private readonly service: AxiosInstance;

  constructor(private readonly serviceInstance: AxiosInstance) {
    this.service = serviceInstance;
  }

  public handleError<T>(error: unknown, message?: string): never {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<T> = error;
      if (message) axiosError.message = message;

      throw axiosError;
    } else {
      const internalError: Error = error as Error;
      if (message) internalError.message = message;

      throw error;
    }
  }

  public async request<T = unknown>(
    config: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.request<T>(config);
      return response.data;
    } catch (error) {
      this.handleError(error, errorMessage);
    }
  }

  public async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.get<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error, errorMessage);
    }
  }

  public async post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error, errorMessage);
    }
  }

  public async put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error, errorMessage);
    }
  }

  public async patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error, errorMessage);
    }
  }

  public async delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.delete<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error, errorMessage);
    }
  }
}
