import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, createHttpLink, DocumentNode, ApolloLink, HttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

export const globalToken = { accessToken: '' };

const graphQlEndpoint = process.env.API_URL;

const uploadLink = createUploadLink({
  uri: graphQlEndpoint,
  credentials: 'include',
  fetch,
}) as any;

const authLink = new ApolloLink((operation: any, forward: any) => {
  operation.setContext({
    headers: {
      authorization: globalToken.accessToken ? `Bearer ${globalToken.accessToken}` : '',
    },
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

export const ExecGraphQL = async (query: DocumentNode, variables = {}, policy?: string) => {
  try {
    const { data } = await client.query({
      query,
      variables,
      // @ts-ignore
      fetchPolicy: policy || 'no-cache',
    });
    return data;
  } catch (err) {
    return {
      error: true,
      graphQLErrors: err && err.graphQLErrors,
      message: err,
    };
  }
};
