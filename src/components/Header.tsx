import React from "react";
import {
  SectionContainer,
  FlexContainer,
  ColumnContainer,
  TextContainer,
} from "../styles/containers";
import { Button } from "../styles/NavStyles";
import HeaderImg from "../../images/illustration-working.svg";
export const Header = () => {
  return (
    <SectionContainer as={"header"}>
      <ColumnContainer>
        <figure>
          <img src={HeaderImg} alt="illustration working" />
        </figure>
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
