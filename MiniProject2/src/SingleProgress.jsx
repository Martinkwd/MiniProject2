export default function SingleProgress({ weight, date, picture }) {
  function deleteProgress() {
    setProgress((originProgress) =>
      originProgress.filter((progress) => progress.weight != weight)
    );
  }
  return (
    <li>
      <img src={picture} alt="" />
      <h3>{weight}</h3>
      <h3>{date}</h3>
      <button onClick={deleteProgress}>Delete</button>
    </li>
  );
}
