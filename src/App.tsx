import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter> 
      <div>
        {/* <Route path="/" exact component={Dashboard} /> */}
        <Dashboard />
      </div>
    </BrowserRouter>
  );
};
export default App;
