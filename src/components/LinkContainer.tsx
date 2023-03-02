import React from "react";
import { ColumnContainer, Button, Link, FlexContainer, LinksWrapper, ShortLink } from "../styles";
const LinkContainer = () => {
  return (
    <LinksWrapper>
      <Link variant="large">https://www.frontendmentor.io</Link>
      <hr/>

      <ShortLink>
        <Link variant="short">https://rel.ink/k4lKyk</Link>
        <Button copy={true} borderRadius='5px'>Copy</Button>
      </ShortLink>
    </LinksWrapper>
  );
};

export default LinkContainer;
