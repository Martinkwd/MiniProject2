import { useState } from "react";

function AddGymForm(onAddGym) {
  const [setsgym, setSetsGym] = useState(1);
  const [repsgym, setRepsGym] = useState("");
  const [weightsgym, setWeightsGym] = useState("");
  const [imagesgym, setImageGym] = useState("");

  const handleSubmitGym = (e) => {
    e.preventDefault();
    const gymdata = new FormData(e.target);
    onAddGym(Object.fromEntries(gymdata));
  };

  return (
    <div className="AddGymFrom componentBox">
      <form onSubmit={handleSubmitGym}>
        <label>
          Sets
          <input
            name="sets"
            value={sets}
            onChange={(e) => setsgym(e.target.value)}
          />
        </label>
        <label>
          Reps:
          <input
            name="reps"
            value={reps}
            onChange={(e) => repsgym(e.target.value)}
          />
        </label>
        <label>
          Weights:
          <input
            name="weights"
            value={weights}
            onChange={(e) => weightsgym(e.target.value)}
          />
        </label>
        <label>
          URL image:
          <input
            name="image"
            value={image}
            onChange={(e) => imagesgym(e.target.value)}
          />
        </label>
        <button>Add Exercise</button>
      </form>
    </div>
  );
}
