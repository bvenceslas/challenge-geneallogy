import { useState } from "react";
import { Button } from "./Button";

export default function Form({ onAddGeneas }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function clearForm() {
    setName("");
    setAge("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGenea = {
      name,
      age,
    };

    onAddGeneas(newGenea);
    clearForm();
  }
  return (
    <div className="form" onSubmit={handleSubmit}>
      <form className="form">
        <h4>Add a Generation</h4>

        <div className="data">
          <label>Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="data">
          <label>Age </label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="btn">
          <Button type="opened">Add</Button>
        </div>
      </form>
    </div>
  );
}
