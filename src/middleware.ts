import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { HttpStatusCode } from './infrastructure/http/HttpFetcher';
import {
  NEXT_API_PATH_REGEX,
  createBffHeader,
  isNextApiRequest,
  isSameOriginRequest,
} from './utils/middleware-helper';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  if (isNextApiRequest(pathname)) {
    if (isSameOriginRequest(req)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: HttpStatusCode.unauthorized },
      );
    }

    return NextResponse.rewrite(
      new URL(
        pathname.replace(NEXT_API_PATH_REGEX, ''),
        process.env.NEXT_API_URL,
      ),
      {
        request: {
          headers: createBffHeader(req),
        },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|fonts|svg|[\\w-]+\\.\\w+).*)'],
};
