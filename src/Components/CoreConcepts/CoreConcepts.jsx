import "./CoreConcepts.css"
export default function CoreConcepts({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
