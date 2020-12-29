import React from "react";

const Person = ({ person }) => (
  <p>
    {person.name}: {person.number}
  </p>
);

const Persons = ({ persons }) => (
  <div>
    {persons.map((person, i) => (
      <Person key={i} person={person} />
    ))}
  </div>
);

export default Persons;
