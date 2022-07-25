import React from "react";
import { Table, Spacer } from "@nextui-org/react";
import ButtonComp from "./ButtonComp";
import { useEffect, useState } from "react";
import Axios from "axios";
import Modal from "./tarefas/Modal";



export default function Tasks() {


  const [listTask, setListTask] = useState();
  

  useEffect(()=>{
    Axios.get("http://localhost:3001/getData").then((response)=>{
      setListTask(response.data)
    });
  },[])

  return (
    <>
    <Table
    lined
      headerLined
      shadow={false}
      selectionMode="single"
      aria-label="Lista de Tarefas"
      css={{
        height: "auto",
        minWidth: "100%",  
      }}
    >
        <Table.Header>
          <Table.Column><strong>TAREFAS</strong></Table.Column>
          <Table.Column><strong>ATÉ A DATA:</strong></Table.Column>
          <Table.Column><strong>ID</strong></Table.Column>
          <Table.Column>
            <> <Modal />

              <Spacer
                y={0.5} />
            </>
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {typeof listTask != "undefined" && listTask.map((value) => {
            
            return <Table.Row key={value.cod_task}>
              <Table.Cell>{value.nome}</Table.Cell>
              <Table.Cell>{value.data}</Table.Cell>
              <Table.Cell>{value.cod_task}</Table.Cell>
              <Table.Cell> <ButtonComp /> </Table.Cell>
            </Table.Row>
          })}
        </Table.Body>
        <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={3}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
    </>
  );
}