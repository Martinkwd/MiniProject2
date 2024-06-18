import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const GymContext = createContext();

export const GymProvider = (props) => {
  const [currentGymProvider, setCurrentGymProvider] = useState({});
  const handleUpdateGym = (exercise, Sets) => {
    console.log(exercise);
    setCurrentGymProvider({ ...currentGymProvider, [exercise]: Sets });
  };
  console.log(currentGymProvider);
  return (
    <GymContext.Provider value={{ currentGymProvider, handleUpdateGym }}>
      {props.children}
    </GymContext.Provider>
  );
};

export const useProgressGymContext = () => {
  return useContext(GymContext);
};

// import { useState } from "react";
// import { useContext } from "react";
// import { createContext } from "react";

// const GymContext = createContext();

// export const GymProvider = (props) => {
//   const [currentGymProvider, setCurrentGymProvider] = useState([]);
//   const handleUpdateGym = (gym) => {
//     console.log(gym);
//     setCurrentGymProvider(gym);
//   };

//   return (
//     <GymContext.Provider
//       value={{ currentProgressProvider, handleUpdateProgress }}
//     >
//       {props.children}
//     </GymContext.Provider>
//   );
// };

// export const useProgressGymContext = () => {
//   return useContext(GymContext);
// };
