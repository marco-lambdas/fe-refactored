import { gql } from '@apollo/client';

export const GET_TRANSACTION = gql`
  query getTransaction($id: Int!) {
    getTransaction(id: $id) {
      id
      code
      order {
        id
        pngCards
        productDetails {
          id
          playerName
          finalImage
          country
          position
          rating
          clubImage
          countryImage
          stat1
          stat1Value
          stat2
          stat2Value
          stat3
          stat3Value
          stat4
          stat4Value
          stat5
          stat5Value
          stat6
          stat6Value
          product {
            name
            price
            image
            positions
          }
          productId
        }
        userId
      }
      coupon {
        code
        percentage
      }
      createdAt
      updatedAt
    }
  }
`;
