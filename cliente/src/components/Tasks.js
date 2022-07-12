import { Table } from "@nextui-org/react";
import ButtonComp from "./ButtonComp";
import ButtonNewTask from "./ButtonNewTask";
import React from "react";



export default function Tasks() {

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
        <Table.Column> <ButtonNewTask /> </Table.Column>
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
