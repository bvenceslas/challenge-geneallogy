import { Button } from "./components/Button";
import Computer from "./components/Computer";
import List from "./components/List";
import Form from "./components/Form";
import { useState } from "react";

export const genes = [
  // {
  //   name: "Petro Sangya",
  //   age: 157,
  // },
  // {
  //   name: "Greyson Badatu",
  //   age: 99,
  // },
  // {
  //   name: "Josh Venceslas",
  //   age: 200,
  // },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [geneas, setGeneas] = useState(genes);

  function handleShowFrom() {
    setShowForm((sh) => !sh);
  }

  function handleAddGeneas(genea) {
    setGeneas((geneas) => [...geneas, genea]);
  }

  return (
    <div className="App">
      <h1>Smart Genealogy</h1>

      <Computer geneas={geneas} />

      {geneas.length ? (
        <List geneas={geneas} />
      ) : (
        <p className="no-data">"😿 No Genealogy Data !!! ✍🏽"</p>
      )}

      <Button type={showForm ? "closed" : "opened"} onClick={handleShowFrom}>
        {showForm ? "Close" : "Add genealogy"}
      </Button>

      {showForm && <Form onAddGeneas={handleAddGeneas} />}
    </div>
  );
}

export default App;
