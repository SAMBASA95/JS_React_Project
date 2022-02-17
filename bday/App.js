import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3 className="text-center">
          {people.length} Birthdays today
        </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          clear All
        </button>
      </section>
    </main>
  );
}

export default App;
