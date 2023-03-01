import React from "react";
import { SectionContainer, ColumnContainer } from "../styles";
import { Form, LinkContainer } from "../components";
const MainSection = () => {
  return (
    <SectionContainer main>
      <ColumnContainer>
      <Form/>
      {/* <LinkContainer/> */}
      </ColumnContainer>
    </SectionContainer>
  );
};

export default MainSection;
