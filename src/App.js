import { Button } from "./components/Button";
import Computer from "./components/Computer";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Smart Genealogy</h1>

      <Computer />

      <List />

      <Button type="opened">Add Genealogy</Button>

      <Form />
    </div>
  );
}

export default App;
