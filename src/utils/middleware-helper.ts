import type { NextRequest } from 'next/server';

export const NEXT_API_PATH_REGEX = /^\/api\//;
export const COOKIE_APP_SESSION_TOKEN_KEY = 'APP_SESSION_TOKEN';

export function createBffHeader(req: NextRequest) {
  const bffHeaders = new Headers(req.headers);
  const sessionToken = req.cookies.get(COOKIE_APP_SESSION_TOKEN_KEY)?.value;

  bffHeaders.set('Ocp-Apim-Subscription-Key', process.env.NEXT_API_KEY || '');

  if (sessionToken) {
    bffHeaders.set('Authorization', `Bearer ${sessionToken}`);
  }
  return bffHeaders;
}

export function isNextApiRequest(pathname: string) {
  return NEXT_API_PATH_REGEX.test(pathname);
}

export function isSameOriginRequest(req: NextRequest) {
  return !req.headers
    .get('referer')
    ?.includes(process.env.NEXT_APP_URL as string);
}
