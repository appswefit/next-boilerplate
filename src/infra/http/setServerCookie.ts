'use server';

import { cookies } from 'next/headers';

export default async function setServerCookies(name: string, value: string) {
  return cookies().set(name, value);
}
