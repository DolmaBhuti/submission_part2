import { useState } from "react";

const Person = ({ person }) => {
  return <p>{person.name}</p>;
};
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    //prevents the default action of submitting a form.
    //The default action would, among other things, cause the page to reload.
    event.preventDefault();
    console.log("add button clicked", event.target);

    const nameObject = {
      name: newName,
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </>
  );
};

export default App;
