import { gql } from '@apollo/client';

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;
