export function toQueryParams(obj: Record<string, any>): string {
  const queryParamsArray = Object.entries(obj)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        return [key, toQueryParams(value)];
      } else {
        return [key, value.toString()];
      }
    });
  const searchParams = new URLSearchParams(queryParamsArray);
  return searchParams.toString();
}
