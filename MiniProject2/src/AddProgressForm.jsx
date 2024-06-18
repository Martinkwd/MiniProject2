import { useState } from "react";
import moment from "moment";

function AddProgressForm({ onAddProgress }) {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const [picture, setPicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("weight", weight);
    data.append("date", date);
    data.append("picture", picture);

    const newProgress = {
      weight,
      date: moment(date).format("DD-MM-YYYY"),
      picture: URL.createObjectURL(picture),
    };
    onAddProgress(newProgress);

    setWeight("");
    setDate(moment().format("DD-MM-YYYY"));
    setPicture("");
  };

  return (
    <div className="AddProgressForm">
      <form onSubmit={handleSubmit}>
        <label>
          Picture:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />{" "}
          KG
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            placeholder="dd-mm-yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProgressForm;
