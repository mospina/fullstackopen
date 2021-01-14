import React from "react";

const Person = ({ person, handleDeletePerson }) => (
  <p>
    {person.name}: {person.number}
    <button onClick={() => handleDeletePerson(person)}>
      delete
    </button>
  </p>
);

const Persons = ({ persons, handleDeletePerson }) => (
  <div>
    {persons.map((person) => (
      <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson} />
    ))}
  </div>
);

export default Persons;
