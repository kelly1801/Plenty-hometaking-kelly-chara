import { useState } from "react";

export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return { copyToClipboard, isCopied };
};

