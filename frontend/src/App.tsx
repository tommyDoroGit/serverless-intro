import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";

function App() {
  return (
    <div className="App">
      <h1>Serverless Demo</h1>
      <div>
        <Todos />
      </div>
      <div>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
