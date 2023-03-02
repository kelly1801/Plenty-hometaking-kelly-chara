import React from "react";
import {
  SectionContainer,
  ColumnContainer,
  TextContainer,
  Button,
  Figure
} from "../styles";
import HeaderImg from "../../images/illustration-working.svg";
export const Header = () => {
  return (
    <SectionContainer as={"header"}>
      <ColumnContainer>
        <Figure>
          <img src={HeaderImg} alt="illustration working" />
        </Figure>
        <TextContainer>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button>Get started</Button>
        </TextContainer>
      </ColumnContainer>
    </SectionContainer>
  );
};
