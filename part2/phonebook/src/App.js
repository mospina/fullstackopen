import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personServices.getAll().then((data) => setPersons(data));
  }, []);

  const updatePerson = () => {
    const target = persons.find((person) => person.name === newName);
    const changes = { name: newName, number: newNumber };

    const result = window.confirm(
      `${target.name} is already added to the phonebook, replace the old number with the new one?`
    );

    if (!result) {
      return;
    }

    personServices.update(target.id, changes).then((data) => {
      setPersons(
        persons.map((person) => (person.id !== target.id ? person : data))
      );
      setNewName("");
      setNewNumber("");
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (persons.map((p) => p.name).includes(newName)) {
      updatePerson();
    } else {
      personServices
        .create({ name: newName, number: newNumber })
        .then((data) => {
          setPersons([...persons, data]);
          setNewName("");
          setNewNumber("");
        });
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

  const handleDeletePerson = (person) => {
    const result = window.confirm(`Delete ${person.name}?`);

    if (!result) {
      return;
    }

    personServices.remove(person.id).then((status) => {
      if (status === 200) {
        const newPersons = persons.filter((p) => p.id !== person.id);
        setPersons(newPersons);
      }
    });
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
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
