import { gql } from '@apollo/client';

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($input: ProductInput!) {
    updateProduct(input: $input) {
      id
      name
      price
      positions
    }
  }
`;
