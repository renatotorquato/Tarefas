import { Button, Spacer } from "@nextui-org/react";
import React from "react";
import Axios from "axios";
import { useState } from "react";


export default function ButtonNewTask() {
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => showElement? setShowElement(false):setShowElement(true);

  function handleClick(){
    showOrHide()
    Axios.post("http://localhost:3001/register");
  }
  
  
  return (
    <>
      <Button onClick={handleClick} size= "sm" shadow color="primary">Nova</Button>
      <Spacer y={0.5} />
      { showElement ? <p>to aqui</p> : null }
    </>
  )
  
};
