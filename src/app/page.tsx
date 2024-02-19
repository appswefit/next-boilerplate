'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import shoppingRoutes from '@/presentation/flows/shopping/routes';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push(shoppingRoutes.home.path);
  }, [router]);

  return <></>;
}
