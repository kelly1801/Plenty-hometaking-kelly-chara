import React from "react";
import {
  Button,
  Link,
  LinksWrapper,
  ShortLink,
} from "../styles";
import { useClipboard } from "../hooks/useClipboard";
interface LinkContainerProps {
  original_link: string;
  short_link: string;
}
const LinkContainer = ({ original_link, short_link }: LinkContainerProps) => {
  const { isCopied, copyToClipboard } = useClipboard();
  return (
    <LinksWrapper>
      <Link variant="large">{original_link}</Link>

      <hr />

      <ShortLink>
        <Link variant="short">{short_link}</Link>
        <Button
          copy={isCopied}
          borderRadius="5px"
          onClick={() => copyToClipboard(short_link)}
        >
          {isCopied ? "Copied" : "Copy"}
        </Button>
      </ShortLink>
    </LinksWrapper>
  );
};

export default LinkContainer;
