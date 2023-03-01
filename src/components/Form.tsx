import React from "react";
import { ColumnContainer, Button } from "../styles";
export const Form = () => {
  return (
    <ColumnContainer as={"form"} form>
      <input type="text" placeholder="Shorten a link here..." />

      <Button type="submit">Shorten it!</Button>
    </ColumnContainer>
  );
};
