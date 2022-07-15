import React from "react";
import { Input, Grid, Textarea, Radio } from "@nextui-org/react";



export default function NewTask() {
    const [checked, setChecked] = React.useState('');

  return (
      <div >
          <Grid.Container gap={4}>
              <Grid>
                  <Input
                      underlined
                      labelPlaceholder="Titulo da Tarefa"
                      color="primary" />
              </Grid>
              
              <Grid>
                  <Input
                  type={"date"}
                      underlined
                      label="Data Limite"
                      color="primary"
                  />
              </Grid>
              <Grid>
                  <Textarea
                      bordered
                      color="primary"
                      labelPlaceholder="Description"
                  />
              </Grid>
          </Grid.Container>

          <Radio.Group 
              className="radio"
              label="Status"
              value={checked}
              onChange={setChecked}
              size="sm"
          >
              <Radio value="progress">Em Andamento</Radio>
              <Radio value="análise">Em Análise</Radio>
              <Radio value="late">Atrasada</Radio>
              <Radio value="complited">Completa</Radio>
          </Radio.Group>


      </div>
  );
}
