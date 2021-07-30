import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    getProduct(id: $id) {
      id
      name
      image
      bleedImage
      lineImage
      price
      size
      positions
      category {
        id
        statistics
      }
    }
  }
`;
