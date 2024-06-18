import { useState } from "react";
import SingleProgress from "./SingleProgress";
import AddProgressForm from "./AddProgressForm";
import { useProgressContext } from "./Hooks/ProgressProvider";
import "./MyPogress.css";

const initialProgress = [];

export default function MyProgress() {
  const { currentProgressProvider, handleUpdateProgress } =
    useProgressContext();

  const handleAddProgress = (newProgress) => {
    newProgress.id = currentProgressProvider.length + 1;
    handleUpdateProgress([...currentProgressProvider, newProgress]);
  };

  // const handleResetProgress = () => {
  //   handleUpdateProgress(initialProgress);
  // };

  const handleDeleteProgress = (id) => {
    handleUpdateProgress(
      currentProgressProvider.filter((progress) => progress.id !== id)
    );
  };

  const progressItems = currentProgressProvider.map((progress) => (
    <SingleProgress
      key={progress.id}
      id={progress.id}
      picture={progress.picture}
      weight={progress.weight}
      date={progress.date}
      onDelete={handleDeleteProgress}
    />
  ));

  return (
    <div className="myProgress">
      <ul>{progressItems}</ul>
      <AddProgressForm onAddProgress={handleAddProgress} />
      {/* <button onClick={handleResetProgress}>Reset</button> */}
    </div>
  );
}
