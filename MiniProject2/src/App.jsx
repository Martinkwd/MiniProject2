import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import exercise from "./exercises.json";
import AppRouter from "./appRouter";
import { ProgressProvider } from "./Hooks/ProgressProvider";
import { GymProvider } from "./Hooks/GymProvider";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <ProgressProvider>
        <GymProvider>
          <NavBar></NavBar>
          <AppRouter></AppRouter>
        </GymProvider>
      </ProgressProvider>
    </>
  );
}

export default App;
