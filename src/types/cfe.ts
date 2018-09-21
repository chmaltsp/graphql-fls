import { gql } from 'apollo-server';

export const cfeTypes = gql`
  type AuthResponse {
    jwt: String
  }
`;
