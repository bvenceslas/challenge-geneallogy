import { genes } from "../data";
import { Genealogy } from "./Genealogy";

export default function List() {
  return (
    <div className="list">
      <h2>List of Genealogies</h2>

      {genes.map((gen) => (
        <Genealogy name={gen.name} age={gen.age} />
      ))}
    </div>
  );
}
