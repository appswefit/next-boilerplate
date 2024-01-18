'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface FilterParams<T> {
  filters?: T;
}

export default function useFilterParams<T = Record<string, string>>({
  filters,
}: FilterParams<T>) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const changeFilter = (name: keyof T, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete(name as string);
    } else {
      current.set(name as string, value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';
    push(query);
  };

  const prepareFilter = () => {
    if (!filters) return {} as T;

    const filterParams: Record<string, any> = {};

    Object.keys(filters).forEach(el => {
      const f: Record<string, string> = filters;

      const defaultValue = f[el];

      filterParams[el] = searchParams.get(el) ?? defaultValue;
    });

    return filterParams as T;
  };

  const params: T = prepareFilter();

  return { changeFilter, params };
}
