
export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface FetchProductsResponseDTO {
  content: IProduct[];
}