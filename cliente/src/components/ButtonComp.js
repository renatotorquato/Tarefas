import { Button, Spacer } from "@nextui-org/react";
import React, { useState, useEffect } from "react";




export default function ButtonComp() {
 
 const [isActive, setIsActve] = useState(false)
 
function endTask () {
  if(setIsActve(true)) {
   //let btnColor = "primary";
  }
 }
  useEffect(()=>{

  })
  
  return (
    <>
      <Button id="btn"
        onClick={() => { endTask() }}
        className="ButtonTask"
        size= "sm"
        shadow 
        color={isActive ? "warning": "success"}>
          {/* se o botão estiver ativo, será escrito concluído. */}
        {isActive ? 'Concluido!' : 'Concluir'}
      </Button>
      <Spacer y={0.5} />
    </>
  );
}
