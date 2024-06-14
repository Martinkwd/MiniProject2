import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import ResponsiveAppBar from "./homePage";

import Homepage from "./homePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AddProgressForm from "./AddProgressForm";

function AppRouter(props) {
  return (
    <Routes>
      <Route index element={<SignUp {...props} />} />
      <Route path="home" element={<Homepage {...props} />} />
      <Route path="SignIn" element={<SignIn {...props} />} />
      <Route path="AddProgressForm" element={<AddProgressForm {...props} />} />
    </Routes>
  );
}

export default AppRouter;
