import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push(shoppingRoutes.home.path);
  }, [router]);

  return <></>;
}
