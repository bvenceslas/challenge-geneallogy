import { Genealogy } from "./Genealogy";

export default function List({ geneas }) {
  return (
    <div className="list">
      {geneas.map((gen) => (
        <Genealogy name={gen.name} age={gen.age} />
      ))}
    </div>
  );
}
