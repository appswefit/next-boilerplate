interface RequestData<T, D> {
  isLoading: boolean;
  data: T | null;
  error: D | null;
}

export default RequestData;
