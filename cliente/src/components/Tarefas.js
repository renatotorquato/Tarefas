import React from "react";
import NewTask from "./newTaskContainer";
import "../style/NewTask.css"

function Tarefas() {
    return (
      <>
      <div className="title">
        <h2>Tarefas</h2>
      </div>
      <div className="newTask">
        <NewTask/>
      </div>
      </>
    );
  }
  export default Tarefas;


