import React from "react";
import "../style/NewTask.css"
import ListAllTask from "./tarefas/ListAllTask";

function Tarefas() {



    return (
      <>
      <div className="title">
        <h2>Tarefas</h2>
      </div>
      <div className="newTask">
      <ListAllTask />
      </div>
      </>
    );
  }
  export default Tarefas;


