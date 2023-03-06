import BffApiFetcher from '@/infrastructure/http/BffApiFetcher';

import { FetchProductsResponseDTO } from './dtos/FetchProductsDTO';

export default class ProductsService {
  public routes = {
    products: '/products',
  };

  public async fetchProducts(): Promise<FetchProductsResponseDTO> {
    return await BffApiFetcher.get(this.routes.products);
  }
}
