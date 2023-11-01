export const Button = ({ children, type, onClick }) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};
