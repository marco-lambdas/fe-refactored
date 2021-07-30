import { gql } from '@apollo/client';

export const CREATE_PAYMENT_INTENT = gql`
  mutation createPaymentIntent($amount: Float!, $orderId: Int, $couponCode: String) {
    createPaymentIntent(amount: $amount, orderId: $orderId, couponCode: $couponCode)
  }
`;
