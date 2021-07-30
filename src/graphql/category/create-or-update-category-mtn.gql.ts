import { gql } from '@apollo/client';

export const CREATE_OR_UPDATE_CATEGORY = gql`
  mutation createOrUpdateCategory($input: CategoryInput!, $id: Int) {
    createOrUpdateCategory(input: $input, id: $id) {
      id
      name
    }
  }
`;
