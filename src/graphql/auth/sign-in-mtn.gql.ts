import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($authCredentialsInput: AuthCredentialsInput!) {
    SignIn(authCredentialsInput: $authCredentialsInput) {
      accessToken
    }
  }
`;
