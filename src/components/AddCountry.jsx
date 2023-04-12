import React, { useState } from 'react'
import { ADD_COUNTRY } from '../querys';
import { useMutation } from '@apollo/client';

export const AddCountry = () => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [currency, setCurrency] = useState("");
  const [languages, setLanguages] = useState([]);

  const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY, {
    onCompleted: () => {
      setName("");
      setCapital("");
      setCurrency("");
      setLanguages([]);
    },
    onError: () => {
      // handle error
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addCountry({ variables: { name, capital, currency, languages } });
  };

  return (
    <div>
      <h2>Add a country</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="capital">Capital</label>
          <input type="text" id="capital" value={capital} onChange={(e) => setCapital(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="currency">Currency</label>
          <input type="text" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="languages">Languages (comma-separated)</label>
          <input type="text" id="languages" value={languages.join(",")} onChange={(e) => setLanguages(e.target.value.split(","))} required />
        </div>
        <button type="submit">{loading ? "Loading..." : "Add"}</button>
        {error && <p>Error :( Please try again</p>}
      </form>
    </div>
  );
}
