import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      capital
      currency,
      languages {
        name
      }
    }
  }
`

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $capital: String!, $currency: String!, $languages: [String!]!) {
    addCountry(input: { name: $name, capital: $capital, currency: $currency, languages: $languages }) {
      name
      capital
      currency
      languages {
        name
      }
    }
  }
`;