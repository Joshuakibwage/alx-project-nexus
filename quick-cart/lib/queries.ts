import { gql } from '@apollo/client';

// Query to fetch categories
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

// Query to fetch products with pagination and filtering
export const GET_PRODUCTS = gql`
  query GetProducts($categoryId: ID, $limit: Int, $offset: Int, $sortPrice: String) {
    products(categoryId: $categoryId, limit: $limit, offset: $offset, sortPrice: $sortPrice) {
      id
      name
      price
      image
      category {
        name
      }
    }
  }
`;
