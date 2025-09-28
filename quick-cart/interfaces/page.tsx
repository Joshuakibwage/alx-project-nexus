export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
  rating?: number;
  createdAt: string;
}

export interface ProductsResponse {
  products: Product[];
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface FilterState {
  category: string;
  sortBy: 'name' | 'price' | 'createdAt' | 'rating';
  sortOrder: 'ASC' | 'DESC';
  searchQuery: string;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalCount: number;
}

export interface ProductsState {
  items: Product[];
  categories: Category[];
  loading: boolean;
  error: string | null;
  pagination: PaginationState;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}