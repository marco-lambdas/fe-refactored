import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
  query getCategory($id: Int!) {
    getCategory(id: $id) {
      id
      name
      code
      statistics
    }
  }
`;
