// import { useState } from "react";

// function AddProgressForm({ onAddProgress }) {
//   const [weight, setWeight] = useState("");
//   const [date, setDate] = useState("");
//   const [picture, setPicture] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     onAddProgress(Object.fromEntries(data));
//   };
//   return (
//     <div className="AddProgressForm">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Picture:
//           <input
//             name="picture"
//             value={picture}
//             onChange={(e) => setPicture(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Weight:
//           <input
//             name="weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </label>
//         <br></br>
//         <label>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <br />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

// export default AddProgressForm;

import { useState } from "react";

function AddProgressForm(props) {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("weight", weight);
    data.append("date", date);
    data.append("picture", picture);

    const newProgress = {
      weight,
      date,
      picture: URL.createObjectURL(picture),
    };
    onAddProgress(newProgress);

    setWeight("");
    setDate("");
    setPicture("");
  };
  console.log(props.onAddProgress);

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
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
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
