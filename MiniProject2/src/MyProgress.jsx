import { useState } from "react";
import SingleProgress from "./SingleProgress";
import AddProgressForm from "./AddProgressForm";
import { useProgressContext } from "./Hooks/ProgressProvider";

const myprogress = [];

export default function MyProgress() {
  const [currentProgress, setCurrentProgress] = useState(myprogress);
  const { currentProgressProvider, setCurrentProgressProvider } =
    useProgressContext();

  const progressItem = currentProgressProvider.map((progress) => (
    <SingleProgress
      key={progress.id}
      picture={progress.picture}
      weight={progress.weight}
      date={progress.date}
      onDelete={() => handleDeleteProgress(progress.id)}
    />
  ));

  const handleAddProgress = (newProgress) => {
    newProgress.id = currentProgressProvider.length + 1;
    setCurrentProgressProvider([...currentProgressProvider, newProgress]);
  };

  const handleResetProgress = () => {
    setCurrentProgressProvider(myprogress);
  };

  const handleDeleteProgress = (id) => {
    setCurrentProgressProvider(
      currentProgressProvider.filter((progress) => progress.id !== id)
    );
  };

  return (
    <>
      <ul>{progressItem}</ul>
      <button onClick={handleResetProgress}>Reset</button>
      <AddProgressForm onAddProgress="handleAddProgress" />
    </>
  );
}
