import { cookies } from 'next/headers';

import HttpClient from '@/infra/http';

export default function useServerAuthService() {
  const authenticate = async () => {
    const fetcher = new HttpClient(
      process.env.AUTH_SERVICE,
      cookies().toString(),
    );

    const response = await fetcher.get('/auth/authorize');

    return response;
  };

  return { authenticate };
}
