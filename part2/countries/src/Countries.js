import React from "react";

const Country = ({ country }) => (
  <div>
    <h3>{country.name}</h3>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>
    <img src={country.flag} alt={`flag of ${country.name}`} width="10%" height="10%" />
  </div>
);

const Countries = ({ countries }) => {
  const countriesCount = countries.length;

  if (countriesCount < 1) {
    return (
      <div>
        <p>No countries to display</p>
      </div>
    );
  } else if (countriesCount === 1) {
    const [country, ...rest] = countries;
    return <Country country={country} />;
  } else if (countriesCount > 1 && countriesCount <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <p key={country.alpha3Code}>{country.name}</p>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
};

export default Countries;
