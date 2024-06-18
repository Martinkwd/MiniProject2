import React, { useEffect, useState } from "react";
import GymAddProgress from "./AddGymSetsRepsWeightForm";
import "./MyPogress.css";

export default function GymProgress() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("./exercises.json")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data.exercises);
      });
  }, []);

  return (
    <div>
      <div className="exercise-list">
        {exercises.map((exercise) => (
          <div key={exercise.itemId} className="exercise-item">
            <h2>{exercise.name}</h2>
            <p>Category: {exercise.category}</p>
            <img src={exercise.thumbnail[0]} alt={exercise.name} />
            <GymAddProgress name={exercise.name}></GymAddProgress>
          </div>
        ))}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// const options = ["Option 1", "Option 2"];

// export default function GymProgress() {
//   const [addset, setAddSet] = useState([{ sets: "", weight: "", reps: "" }]);
//   const [value, setValue] = React.useState(options[0]);
//   const [inputValue, setInputValue] = React.useState("");

//   const handleValueChange = (index, event) => {
//     const { name, value } = event.target;
//     const values = [...addset];
//     values[index][name] = value;
//     setAddSet(values);
//   };

//   const handleAddfields = () => {
//     setAddSet([...addset, { sets: "", weight: "", reps: "" }]);
//   };

//   const handleDeletefields = (index) => {
//     const newAddset = [...addset];
//     newAddset.splice(index, 1);
//     setAddSet(newAddset);
//   };

//   return (
//     <div className="container">
//       {addset.map((set, index) => (
//         <div className="input-container" key={index}>
//           <div>
//             <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
//             <div>{`inputValue: '${inputValue}'`}</div>
//             <br />
//             <Autocomplete
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//               inputValue={inputValue}
//               onInputChange={(event, newInputValue) => {
//                 setInputValue(newInputValue);
//               }}
//               id="controllable-states-demo"
//               options={options}
//               sx={{ width: 300 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Controllable" />
//               )}
//             />
//           </div>
//           <input
//             type="text"
//             name="sets"
//             value={set.sets}
//             placeholder="Sets"
//             onChange={(e) => handleValueChange(index, e)}
//           />
//           <input
//             type="text"
//             name="weight"
//             value={set.weight}
//             placeholder="Weight"
//             onChange={(e) => handleValueChange(index, e)}
//           />
//           <input
//             type="text"
//             name="reps"
//             value={set.reps}
//             placeholder="Reps"
//             onChange={(e) => handleValueChange(index, e)}
//           />
//           <button className="deleteb" onClick={() => handleDeletefields(index)}>
//             <span className="deleteIcon">Delete</span>
//           </button>
//         </div>
//       ))}
//       <button className="addb" onClick={handleAddfields}>
//         <span className="addIcon">Add Set</span>
//       </button>
//     </div>
//   );
// }

// this is my buttom to add new sets

// import { useState } from "react";

// export default function GymProgress() {
//   const [addset, setAddSet] = useState([{ sets: "", weight: "", reps: "" }]);

//   const handleValueChange = (index, event) => {
//     const { name, value } = event.target;
//     const values = [...addset];
//     values[index][name] = value;
//     setAddSet(values);
//   };

//   const handleAddfields = () => {
//     setAddSet([...addset, { sets: "", weight: "", reps: "" }]);
//   };

//   const handleDeletefields = (index) => {
//     const newAddset = [...addset];
//     newAddset.splice(index, 1);
//     setAddSet(newAddset);
//   };

//   return (
//     <div className="container">
//       <h1>Add Sets</h1>

//       {addset.map((set, index) => (
//         <div className="input-container" key={index}>
//           <input
//             type="text"
//             name="sets"
//             value={set.sets}
//             placeholder="Sets"
//             onChange={(e) => handleValueChange(index, e)}
//           />
//           <input
//             type="text"
//             name="weight"
//             value={set.weight}
//             placeholder="Weight"
//             onChange={(e) => handleValueChange(index, e)}
//           />
//           <input
//             type="text"
//             name="reps"
//             value={set.reps}
//             placeholder="Reps"
//             onChange={(e) => handleValueChange(index, e)}
//           />
//           <button className="deleteb" onClick={() => handleDeletefields(index)}>
//             <span className="deleteIcon">Delete</span>
//           </button>
//         </div>
//       ))}
//       <button className="addb" onClick={handleAddfields}>
//         <span className="addIcon">Add Set</span>
//       </button>
//     </div>
//   );
// }
