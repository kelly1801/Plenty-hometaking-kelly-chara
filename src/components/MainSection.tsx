import React from "react";
import { SectionContainer } from "../styles";
import { Form, LinkContainer, StatisticsSection } from "../components";
import { useAppSelector } from "../store/hooks";
const MainSection = () => {
  const { links  } = useAppSelector(state => state.links)
  return (
    <SectionContainer main>
      <Form />
      { 
      links?.map(({result}, index) => <LinkContainer key={index} {...result}/> )
      }
      
      
      <StatisticsSection />
    </SectionContainer>
  );
};

export default MainSection;
