import { gql } from '@apollo/client';

export const GENERATE_CARD_PDFS = gql`
  mutation generateCardPdfs($ids: [Int!]!) {
    generateCardPdfs(ids: $ids)
  }
`;
