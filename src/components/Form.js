import { Button } from "./Button";

export default function Form() {
  return (
    <div className="form">
      <form className="form">
        <h4>Add a Generation</h4>

        <div className="data">
          <label>Name </label>
          <input type="text" />
        </div>

        <div className="data">
          <label>Age </label>
          <input type="text" />
        </div>

        <div className="btn">
          <Button type="opened">Add</Button>
          <Button type="closed">Close</Button>
        </div>
      </form>
    </div>
  );
}
