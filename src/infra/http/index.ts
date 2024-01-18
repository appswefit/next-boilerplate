import getServerCookies from './getServerCookies';
import { NextResponse } from 'next/server';
import setServerCookies from './setServerCookie';

export default class HttpClient {
  private readonly isServer = process.browser ? false : true;

  private baseUrl: string | undefined;

  constructor(baseUrl?: string) {
    if (!this.isServer) {
      this.baseUrl = `${window.location.origin}/api`;
    }

    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  private handleAuth(response: Response) {
    if (response.status !== 401) return;

    if (!this.isServer) {
      window.location.replace('/login');
      document.cookie = '';
      return;
    }

    setServerCookies('X-DrenApps-Auth', '');
    NextResponse.redirect(`${this.baseUrl}/login`);
  }

  private makeUrl(endpoint: string, queryParams?: Record<string, any>) {
    const searchParams = new URLSearchParams(queryParams);

    const url = new URL(`${this.baseUrl}${endpoint}`);

    url.search = searchParams.toString();

    return url;
  }

  private async makeDefaultRequestOption(
    isFile?: boolean,
  ): Promise<RequestInit> {
    const defaultRequestOption: RequestInit = {
      headers: {
        ...(!isFile && { 'Content-type': 'application/json' }),
      },
    };

    if (this.isServer) {
      return {
        ...defaultRequestOption,
        headers: {
          ...defaultRequestOption.headers,
          Cookie: await getServerCookies(),
        },
      };
    }

    return defaultRequestOption;
  }

  public async get(endpoint: string, queryParams?: Record<string, any>) {
    const url = this.makeUrl(endpoint, queryParams);

    const options = await this.makeDefaultRequestOption();

    const response = await fetch(url, options);

    this.handleAuth(response);

    return response;
  }

  public async post<B = unknown>(
    endpoint: string,
    body: B,
    queryParams?: Record<string, any>,
  ) {
    const url = this.makeUrl(endpoint, queryParams);

    const options = await this.makeDefaultRequestOption();

    const response = await fetch(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });

    this.handleAuth(response);

    return response;
  }

  public async patch<B = unknown>(
    endpoint: string,
    body: B,
    queryParams?: Record<string, any>,
  ) {
    const url = this.makeUrl(endpoint, queryParams);
    const options = await this.makeDefaultRequestOption();

    const response = await fetch(url, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });

    this.handleAuth(response);

    return response;
  }

  public async put<B = unknown>(
    endpoint: string,
    body: B,
    queryParams?: Record<string, any>,
  ) {
    const url = this.makeUrl(endpoint, queryParams);
    const options = await this.makeDefaultRequestOption();

    const response = await fetch(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });

    this.handleAuth(response);

    return response;
  }

  public async delete(endpoint: string, queryParams?: Record<string, any>) {
    const url = this.makeUrl(endpoint, queryParams);

    const options = await this.makeDefaultRequestOption();

    const response = await fetch(url, {
      ...options,
      method: 'DELETE',
    });

    this.handleAuth(response);

    return response;
  }

  public async upload(endpoint: string, body: any) {
    const url = this.makeUrl(endpoint);

    const options = await this.makeDefaultRequestOption(true);

    const response = await fetch(url, {
      ...options,
      method: 'POST',
      body,
    });

    this.handleAuth(response);

    return response;
  }
}
