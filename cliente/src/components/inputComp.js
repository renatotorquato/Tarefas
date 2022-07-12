import { Input, Spacer } from "@nextui-org/react";
import React from "react";

export default function InputComponent() {
  return (
    <>
      <Input clearable bordered labelPlaceholder="Name" initialValue="NextUI" />
      <Spacer y={2.5} />
      
    </>
  );
}
