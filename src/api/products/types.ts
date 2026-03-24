export type ProductType = {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  brand: string;
  sku: string;
  images: string[];
};

export type ProductQueryParams = {
  searchQuery?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
};
