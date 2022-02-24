import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Serverless Demo</h1>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
