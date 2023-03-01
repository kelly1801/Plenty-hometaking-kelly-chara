import React from "react";
import { SectionContainer, FlexContainer } from "../styles";
import { Form, LinkContainer, StatisticsSection } from "../components";
const MainSection = () => {
  return (
    <SectionContainer main>
      <Form />
      <LinkContainer />
      <LinkContainer />
      <LinkContainer />
      <LinkContainer />
      <LinkContainer />

      <StatisticsSection />
    </SectionContainer>
  );
};

export default MainSection;
