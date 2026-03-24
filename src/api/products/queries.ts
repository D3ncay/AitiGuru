import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/products/requests';
import { ProductQueryParams } from '@/api/products/types';

export const useProducts = ({ searchQuery, sortBy, order }: ProductQueryParams) => {
  return useQuery({
    queryKey: ['products', { searchQuery, sortBy, order }],
    queryFn: () => getProducts({ searchQuery, sortBy, order })
  });
};
