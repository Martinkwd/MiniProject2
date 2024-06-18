export default function SingleProgress({
  id,
  weight,
  date,
  picture,
  onDelete,
}) {
  return (
    <li className="singleProgress">
      <img src={picture} alt="" />
      <h3>{weight} KG</h3>
      <h3>{date}</h3>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
