import { gql } from '@apollo/client';

export const GET_CARD_HTML = gql`
  mutation uploadFinalCardOutput($input: CardFinalOutputInput!) {
    uploadFinalCardOutput(input: $input)
  }
`;
