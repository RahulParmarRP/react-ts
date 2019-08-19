import React from "react";
import "./App.css";
//import Dashboard from "./components/dashboard/dashboard";
import ResDashboard from "./components/dashboard/responsive-drawer";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Dashboard /> */}
        <ResDashboard />
      </div>
    </BrowserRouter>
  );
};
export default App;
