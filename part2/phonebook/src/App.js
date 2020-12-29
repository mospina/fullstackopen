import React, { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (persons.map((p) => p.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const onFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handler={onFilterChange} />

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={onSubmit}
        onNameChange={onNameChange}
        name={newName}
        onNumberChange={onNumberChange}
        number={newNumber}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons.filter(
          (person) => person.name.toLowerCase().search(newFilter) >= 0
        )}
      />
    </div>
  );
};

export default App;