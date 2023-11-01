export const Genealogy = ({ name, age }) => {
  return (
    <div className="genealogy">
      <p>
        <span className="name">{name}</span> Lived
        <span className="age">{age}</span> Years
      </p>
    </div>
  );
};
