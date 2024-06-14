import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AppRouter from "./appRouter";
import { ProgressProvider } from "./Hooks/ProgressProvider";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <ProgressProvider>
        <NavBar></NavBar>
        <AppRouter></AppRouter>
      </ProgressProvider>
    </>
  );
}

export default App;
