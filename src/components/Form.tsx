import React from "react";
import { ColumnContainer, Button, Form as FormContainer } from "../styles";
export const Form = () => {
  return (
    <FormContainer as={"form"}>
      <input type="text" placeholder="Shorten a link here..." />

      <Button type="submit" borderRadius="5px">
        Shorten it!
      </Button>
    </FormContainer>
  );
};
