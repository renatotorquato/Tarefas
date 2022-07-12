import React from "react";
import "../style/Home.css";
import Observation from "./Observation";
import Tasks from "./Tasks";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>Tarefas a Executar!</h1>
        <Tasks />
      </div>
      <div className="OBS">
        <Observation />
      </div>
    </>
  );
}