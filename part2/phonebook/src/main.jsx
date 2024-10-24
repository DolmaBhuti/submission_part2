import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

const promise = axios.get("http://localhost:3001/persons");
console.log(promise);

// const promise2 = axios.get("http://localhost:3001/foobar");
// console.log(promise2);

const persons = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <App persons={persons} />
);
