import { useState } from "react";
import { useProgressGymContext } from "./Hooks/GymProvider";
// import deleteIcon from '@iconify-icons/twemoji/delete-button';

export default function GymAddProgress({ name }) {
  const [addset, setAddSet] = useState([{ sets: "", weight: "", reps: "" }]);

  const { currentGymProvider, handleUpdateGym } = useProgressGymContext();

  const handleValueChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...addset];
    values[index][name] = value;
    handleUpdateGym(name, values);
  };

  const handleAddfields = () => {
    handleUpdateGym(name, [
      ...(currentGymProvider[name] || []),
      { sets: "", weight: "", reps: "" },
    ]);
  };

  const handleDeletefields = (index) => {
    const newAddset = [...currentGymProvider[name]];
    newAddset.splice(index, 1);
    handleUpdateGym(name, newAddset);
  };

  return (
    <div className="AddSets">
      {currentGymProvider[name] &&
        currentGymProvider[name].map((set, index) => (
          <div className="input-container" key={index}>
            <input
              type="text"
              name="sets"
              value={set.sets}
              placeholder="Sets"
              onChange={(e) => handleValueChange(index, e)}
            />
            <input
              type="text"
              name="weight"
              value={set.weight}
              placeholder="Weight"
              onChange={(e) => handleValueChange(index, e)}
            />
            <input
              type="text"
              name="reps"
              value={set.reps}
              placeholder="Reps"
              onChange={(e) => handleValueChange(index, e)}
            />
            <button
              className="deleteb"
              onClick={() => handleDeletefields(index)}
            >
              <span className="deleteIcon">X</span>
            </button>
          </div>
        ))}
      <button className="addb" onClick={handleAddfields}>
        <span className="addIcon">Add Set</span>
      </button>
    </div>
  );
}

// import { useState } from "react";

// export default function GymAddProgress() {
//   const [addset, setAddSet] = useState([{ sets: "", weight: "", reps: "" }]);
//   //   const { currentProgressProvider, handleUpdateProgress } =
//   //     useProgressGymContext();

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
