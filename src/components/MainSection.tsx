import React from "react";
import { SectionContainer, ColumnContainer } from "../styles";
import {Form} from "./Form";
const MainSection = () => {
  return (
    <SectionContainer main>
      <ColumnContainer>
      <Form/>
      </ColumnContainer>
    </SectionContainer>
  );
};

export default MainSection;
