import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Homepage from "./Components/Homepage";



const App = () => {

  return (
    <>
      <div className="mainapp">
        <Homepage  />
      </div>

      <div className="App">
        <Sidebar />
      </div>
    </>
  );
};

export default App;
