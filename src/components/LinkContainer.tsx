import React from "react";
import { ColumnContainer, Button, Link } from "../styles";
const LinkContainer = () => {
  return (
    <ColumnContainer link>
      <Link variant="large">https://www.frontendmentor.io</Link>
      <hr/>
      <ColumnContainer>
        <Link variant="short">https://rel.ink/k4lKyk</Link>
        <Button copy={true} borderRadius='5px'>Copy Link</Button>
      </ColumnContainer>
    </ColumnContainer>
  );
};

export default LinkContainer;
