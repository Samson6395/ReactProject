export default function Button({ children,onButtonClick }) {
  return (
    <li>
      {" "}
      <button onClick={onButtonClick} >{children}</button>
    </li>
  );
}
