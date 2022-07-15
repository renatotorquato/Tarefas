import { Table } from "@nextui-org/react";
import ButtonComp from "./ButtonComp";
//import ButtonNewTask from "./ButtonNewTask";
import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import { useState } from "react";
//import Axios from "axios";
import Modal from "./tarefas/Modal";


export default function Tasks(props) {
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => showElement? setShowElement(false):setShowElement(true);
  
 

  // function handleClick(){
  //   showOrHide()
  //   Axios.post("http://localhost:3001/register");
  // }


  return (
    
    <Table
    lined
      headerLined
      shadow={false}
      selectionMode="multiple"
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",  
      }}
    >
      <Table.Header>
        <Table.Column><strong>TAREFAS</strong></Table.Column>
        <Table.Column><strong>STATUS</strong></Table.Column>
        <Table.Column> 
          <> <Modal/>
          
          {/* <Button
            onClick={showOrHide}
            size="sm"
            shadow color="primary"
          >Nova</Button> */}
            <Spacer
              y={0.5} />
            {showElement? <Modal/> : null}
          </>
     </Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tarefa A</Table.Cell>
          <Table.Cell>Completa</Table.Cell>
          <Table.Cell> <ButtonComp /> </Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Tarefa B</Table.Cell>
          <Table.Cell>Em progresso</Table.Cell>
          <Table.Cell><ButtonComp /></Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Tarefa C</Table.Cell>
          <Table.Cell>Em análise</Table.Cell>
          <Table.Cell><ButtonComp /></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}