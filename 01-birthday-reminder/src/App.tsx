import { useState } from "react";
import List, { Person } from "./List";
import data from "./data";

export default function App() {
  const [people, setPeople] = useState<Person[]>(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}
