import React from "react";
import { SectionContainer, TextContainer, Button } from "../styles";
import Blob from '../../images/bg-boost-desktop.svg'
import BlobMobile from '../../images/bg-boost-desktop.svg'

const BoostSection = () => {
  return (
    <SectionContainer boost bg={BlobMobile} bgBig={Blob}>
      <TextContainer>
        <h4>Boost your links today</h4>
        <Button> Get Started </Button>
      </TextContainer>
    </SectionContainer>
  );
};

export default BoostSection;
