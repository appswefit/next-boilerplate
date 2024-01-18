'use server';

import { cookies } from 'next/headers';

export default async function getServerCookies() {
  return cookies().toString();
}
