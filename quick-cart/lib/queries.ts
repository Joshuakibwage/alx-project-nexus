import { gql } from '@apollo/client';

// Categories
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

// Products (with filters and pagination)
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

// Single Product by ID
export const GET_PRODUCT_DETAILS = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      image
      category {
        name
      }
    }
  }
`;
