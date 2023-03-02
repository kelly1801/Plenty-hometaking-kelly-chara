import React from "react";
import {
  ColumnContainer,
  Button,
  Link,
  FlexContainer,
  LinksWrapper,
  ShortLink,
} from "../styles";

interface LinkContainerProps {
  original_link: string;
  short_link: string;
}
const LinkContainer = ({original_link, short_link}:LinkContainerProps) => {
  return (
    <LinksWrapper>
      <Link variant="large">{original_link}</Link>
      <hr />

      <ShortLink>
        <Link variant="short">{short_link}</Link>
        <Button copy={true} borderRadius="5px">
          Copy
        </Button>
      </ShortLink>
    </LinksWrapper>
  );
};

export default LinkContainer;
