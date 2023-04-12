import React from 'react'
import { GET_COUNTRIES } from '../querys';
import { useQuery } from '@apollo/client';

export const Country = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>List of countries</h2>
      {data?.countries.map((country) => (
        <div key={country.name}>
          <h3>{country.name}</h3>
          <p>Capital: {country.capital}</p>
          <p>Currency: {country.currency}</p>
          <p>Languages: {country.languages.map((language) => language.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
