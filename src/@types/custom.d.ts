declare global {
  interface ApiResponse<T> {
    data: T;
    message?: string;
  }
}

export {};
