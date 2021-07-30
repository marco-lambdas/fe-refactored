import { gql } from '@apollo/client';

export const GET_COUPON_CODE = gql`
  query getCoupon($code: String!) {
    getCoupon(code: $code) {
      id
      code
      percentage
    }
  }
`;
