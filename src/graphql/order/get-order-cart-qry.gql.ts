import { gql } from '@apollo/client';

export const GET_ORDER_CART = gql`
  query getOrderCart($userId: Int, $id: Int) {
    getOrder(userId: $userId, id: $id) {
      id
      productDetails {
        id
        playerName
        playerImage
        previewImage
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
      currentCart
      userId
      createdAt
    }
  }
`;
