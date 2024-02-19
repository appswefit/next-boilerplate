import Fetcher from '@/infra/http';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { IBffResponse } from './types';
import { HttpError, HttpStatusCode } from '@/infra/http/core/HttpError';
import { IBffResponseBodyError } from '@/infra/http/factory/types';

export async function POST(request: NextApiRequest) {
  try {
    const { body } = request;

    const fetcher = new Fetcher({
      baseUrl: process.env.NEXT_PUBLIC_BFF_API_URL ?? '',
    });

    const data = await fetcher.post('/products', body);

    return NextResponse.json(data.body);
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json(error.body, {
        status: error.statusCode,
        statusText: error.message,
      });
    }

    return NextResponse.json(null, {
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusText: error instanceof Error ? error.message : '',
    });
  }
}

export async function GET(request: NextApiRequest) {
  try {
    const { query } = request;

    const fetcher = new Fetcher({
      baseUrl: process.env.NEXT_PUBLIC_BFF_API_URL ?? '',
      errorResponseInterceptor: (error: HttpError<IBffResponseBodyError>) => {
        console.log('init errorResponseInterceptor');
        return error;
      },
    });

    const data = await fetcher.get<IBffResponse>('/products', query);

    return NextResponse.json(data.body);
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json(error.body, {
        status: error.statusCode,
        statusText: error.message,
      });
    }

    return NextResponse.json(null, {
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusText: error instanceof Error ? error.message : '',
    });
  }
}
