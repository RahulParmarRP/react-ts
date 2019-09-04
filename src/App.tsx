import React from "react";
import "./App.css";
//import Dashboard from "./components/dashboard/dashboard";
import ResDashboard from "./components/dashboard/responsive-drawer";

const App: React.FC = () => {
  return (
    <React.Fragment>
      {/* <Dashboard /> */}
      <ResDashboard />
    </React.Fragment>
  );
};
export default App;
