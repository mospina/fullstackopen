import React, { useState, useEffect } from "react";
import Countries from './Countries';
import Filter from './Filter';
import countriesServices from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countriesServices.getAll().then((data) => setCountries(data));
  }, []);

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const onSelectCountry = (name) => {
    setFilter(name)
  }

  return (
    <div>
      <Filter value={filter} handler={onFilterChange} />
        
      <Countries 
        countries={countries.filter(
          (country) => country.name.toLowerCase().search(filter.toLowerCase()) >= 0
        )}
        onSelectCountry={onSelectCountry}
      />
    </div>
  );
}

export default App;
