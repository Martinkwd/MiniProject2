import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ProgressContext = createContext();

export const ProgressProvider = (props) => {
  const [currentProgressProvider, setCurrentProgressProvider] = useState([]);
  const handleUpdateProgress = (progress) => {
    console.log(progress);
    setCurrentProgressProvider(progress);
  };

  return (
    <ProgressContext.Provider
      value={{ currentProgressProvider, handleUpdateProgress }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};

export const useProgressContext = () => {
  return useContext(ProgressContext);
};
