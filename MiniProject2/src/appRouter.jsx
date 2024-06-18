import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import ResponsiveAppBar from "./homePage";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AddProgressForm from "./AddProgressForm";
import MyProgress from "./MyProgress";
import GymProgress from "./GymProgress";
import Dashboard from "./Dashboard";

function AppRouter(props) {
  return (
    <Routes>
      <Route index element={<SignUp {...props} />} />
      {/* <Route path="home" element={<Homepage {...props} />} /> */}
      <Route path="SignIn" element={<SignIn {...props} />} />
      <Route path="MyProgress" element={<MyProgress {...props} />} />
      <Route path="GymProgress" element={<GymProgress {...props} />} />
      <Route path="Dashboard" element={<Dashboard {...props} />} />
    </Routes>
  );
}
export default AppRouter;
