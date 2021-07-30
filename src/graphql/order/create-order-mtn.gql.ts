import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation createOrUpdateOrderItem($productDetailInput: ProductDetailInput!, $id: Int) {
    createOrUpdateOrderItem(productDetailInput: $productDetailInput, id: $id) {
      id
      userId
    }
  }
`;
