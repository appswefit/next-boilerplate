import { HttpError } from '@/infrastructure/http/core/HttpError';
import { IHttpResponse } from '@/infrastructure/http/core/IHttpFetcher';
import { IBffResponseBodyError } from '@/infrastructure/http/factory/types';
import RequestData from '@/infrastructure/types/request-data';

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
