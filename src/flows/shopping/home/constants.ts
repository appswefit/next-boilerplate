import { IProductListFilter } from '@/hooks/product/dtos/GetProductListDTO';

const INITIAL_PAGE_LIMIT = 10;
const initialFilter: IProductListFilter = {
  searchTerm: null,
  limit: INITIAL_PAGE_LIMIT,
  offset: 0,
};

export { initialFilter, INITIAL_PAGE_LIMIT };
