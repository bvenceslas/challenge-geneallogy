import { Button } from "./components/Button";
import Computer from "./components/Computer";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>Smart Genealogy</h1>

      <Computer />

      <List />

      <Button>Add Genealogy</Button>
    </div>
  );
}

export default App;
