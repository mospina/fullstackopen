import React, {useState, useEffect} from "react";
import weatherService from './services/weather'

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService.get(country.capital).then((data) => {
      if (data.error) {
        console.log(data)
        setWeather(null)
      } else {
        setWeather(data)
      }
    });
  }, []);


  return (
  <div>
    <h2>{country.name}</h2>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>
    <div>
      <h3>Languages</h3>
      <ul>
      {country.languages.map((language) => 
        (<li key={language.iso639_2}>{language.name}</li>)
      )}
      </ul>
    </div>
    <img src={country.flag} alt={`flag of ${country.name}`} width="10%" height="10%" />
    
    { weather && 
      <div>
        <h3>Weather in {weather.location.name}</h3>
        <p>temperature: {weather.current.temperature} Celcius</p>
        <img src={weather.current.weather_icons[0]} alt="Weather icon" />
        <p>wind: {weather.current.wind_speed} mph, direction {weather.current.wind_dir}</p>
      </div>
    }
  </div>
)
};

const Countries = ({ countries, onSelectCountry }) => {
  const countriesCount = countries.length;

  if (countriesCount < 1) {
    return (
      <div>
        <p>No countries to display</p>
      </div>
    );
  } else if (countriesCount === 1) {
    const [country] = countries;
    return <Country country={country} />;
  } else if (countriesCount > 1 && countriesCount <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <p key={country.alpha3Code}>
            {country.name} 
            <button onClick={() => onSelectCountry(country.name)}>show</button>
          </p>
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
