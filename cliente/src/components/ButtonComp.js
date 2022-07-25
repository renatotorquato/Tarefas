import { Button, Spacer } from "@nextui-org/react";
import React, { useState } from "react";




export default function ButtonComp() {
 
 const [isActive, setIsActve] = useState(false)
 
function cheked(){
  setIsActve(true)
}
  
  return (
    <>
      <Button id="btn"
      onClick={cheked}
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
