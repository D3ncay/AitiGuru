import { api } from '@/api/instance';
import { AxiosResponse } from 'axios';
import { ProductQueryParams, ProductType } from '@/api/products/types';

export const getProducts = async ({ searchQuery, sortBy, order }: ProductQueryParams) => {
  const response: AxiosResponse<{ products: ProductType[] }> = await api.get(
    `/products${searchQuery ? `/search?q=${searchQuery}` : ''}`,
    { params: { sortBy, order, limit: 10 } }
  );

  return response.data.products;
};
