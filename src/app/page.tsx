'use client'

import shoppingRoutes from '@/flows/shopping/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push(shoppingRoutes.home.path);
  }, [router]);

  return <></>;
}
