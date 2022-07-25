import { Modal, Button, Text, Input, Textarea, Spacer } from "@nextui-org/react";
import { useState } from "react";
import Axios from "axios";
import React from "react";

export default function App() {
  const [valueInput, setValueInput] = useState();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");

  };

  const savedData = () => {
    setVisible(false);
    console.log("saved");
    Axios.post("http://localhost:3001/register", {
      title: valueInput.title,
      date: valueInput.date,
      details: valueInput.details,
    }).then((response) => {
      console.log(response)
    })
  };


  function changeValue(value) {
    setValueInput(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))

  }

  return (
    <div>
      <Button

        size="sm"
        shadow
        color="primary"
        onClick={handler}>
        Nova
      </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
      // onClose={closeHandler}

      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Nova Tarefa!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Spacer y={0.5} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Titulo da tarefa"
            name="title"
            onChange={changeValue}

          />
          <Input
            type={"date"}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder=" "
            label="Data Limite"
            name="date"
            onChange={changeValue}
          />
          <Spacer y={0.5} />
          <Textarea
            bordered
            color="primary"
            labelPlaceholder="Detalhes:"
            name="details"
            onChange={changeValue}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={savedData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
