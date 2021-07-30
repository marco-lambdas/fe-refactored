import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($authCredentialsInput: AuthCredentialsInput!) {
    SignUp(authCredentialsInput: $authCredentialsInput) {
      user {
        email
        id
      }
      errors {
        field
        message
      }
    }
  }
`;
