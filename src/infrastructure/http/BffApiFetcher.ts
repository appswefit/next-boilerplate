import { COOKIE_APP_SESSION_TOKEN_KEY } from '@/middleware';
import axios from 'axios';
import { deleteCookie } from 'cookies-next';

import AxiosFetcher from './AxiosFetcher';
import { HttpStatusCode } from './HttpFetcher';

const bffApi = axios.create({
  baseURL: '/api',
});

bffApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === HttpStatusCode.unauthorized) {
      deleteCookie(COOKIE_APP_SESSION_TOKEN_KEY);
      window.location.assign('/sessao-expirada');
    }

    return Promise.reject(error);
  },
);

const BffApiFetcher = new AxiosFetcher(bffApi);

export default BffApiFetcher;
