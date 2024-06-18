export default function SingleGym({ image, sets, weights, reps }) {
  function deleteExercise() {
    setGym((originGym) => originGym.filter((gym) => gym.image != image));
  }

  return (
    <li className="singleGym">
      <img src={image} alt="" />
      <h3>{sets}</h3>
      <h3>{weights}</h3>
      <h3>{reps}</h3>
      <button onClick={deleteExercise}>Delete</button>
    </li>
  );
}
