import { genes } from "../data";
import { Genealogy } from "./Genealogy";

export default function List() {
  return (
    <div className="list">
      {genes.map((gen) => (
        <Genealogy name={gen.name} age={gen.age} />
      ))}
    </div>
  );
}
