import AxiosFetcher from '@/infrastructure/http/axios/AxiosFetcher';
import {
  HttpError,
  HttpStatusCode,
} from '@/infrastructure/http/core/HttpError';
import { IHttpResponse } from '@/infrastructure/http/core/IHttpFetcher';
import { BFF_API_URL } from '@/infrastructure/http/factory/constants';
import { IBffResponseBodyError } from '@/infrastructure/http/factory/types';

import {
  AUTHORIZATION_HEADER_KEY,
  BFF_API_SUBSCRIPTION_HEADER_KEY,
  BFF_API_SUBSCRIPTION_KEY,
  SESSION_TOKEN_STORAGE_KEY,
} from './constants';

const createCustomHeader = (sessionToken: string, subscriptionKey: string) => {
  return {
    [AUTHORIZATION_HEADER_KEY]: `Bearer ${sessionToken}`,
    [BFF_API_SUBSCRIPTION_HEADER_KEY]: subscriptionKey,
  };
};

const errorResponseInterceptor = (error: HttpError<IBffResponseBodyError>) => {
  if (error.statusCode === HttpStatusCode.UNAUTHORIZED) {
    localStorage.removeItem(SESSION_TOKEN_STORAGE_KEY);
    window.location.assign('/sessao-expirada');
  }
  return error;
};

const makeAuthenticatedBffFetcher = () => {
  const sessionToken = localStorage.getItem(SESSION_TOKEN_STORAGE_KEY) ?? '';
  const subscriptionKey = localStorage.getItem(BFF_API_SUBSCRIPTION_KEY) ?? '';
  const config = {
    baseUrl: BFF_API_URL ?? '',
    customHeader: createCustomHeader(sessionToken, subscriptionKey),
    errorResponseInterceptor,
  };
  return new AxiosFetcher<IHttpResponse, IBffResponseBodyError>(config);
};

export default makeAuthenticatedBffFetcher;
