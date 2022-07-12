import { Link } from "@nextui-org/react";
import "../style/Navbar.css";
import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <Link href="/">Home</Link>
      <Link href="/tarefas">Tarefas</Link>
    </div>
  );
}
export default Navbar;