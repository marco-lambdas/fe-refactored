import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation createTransaction($input: TransactionInput!) {
    createTransaction(input: $input) {
      id
      code
      order {
        id
      }
      orderId
    }
  }
`;
