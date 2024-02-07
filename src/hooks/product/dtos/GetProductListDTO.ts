import { HttpError } from '@/infra/http/core/HttpError';
import { IHttpResponse } from '@/infra/http/core/IHttpFetcher';
import { IBffResponseBodyError } from '@/infra/http/factory/types';
import RequestData from '@/infra/types/request-data';

interface IProductListFilter {
  searchTerm?: string | null;
  offset: number;
  limit: number;
}

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}

interface IGetProductListResponseDTO {
  content: IProduct[];
}

type ProductListRequestData = RequestData<
  IHttpResponse<IGetProductListResponseDTO>,
  HttpError<IBffResponseBodyError>
>;

export type {
  IProductListFilter,
  IProduct,
  IGetProductListResponseDTO,
  ProductListRequestData,
};
