import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;

}

:root {
  --primary-cyan: hsl(180, 66%, 49%);
  --primary-dark-violet: hsl(257, 27%, 26%);
  --secondary-red: hsl(0, 87%, 67%);
  --neutral-gray: hsl(0, 0%, 75%);
  --neutral-grayish-violet: hsl(257, 7%, 63%);
  --neutral-very-dark-blue: hsl(255, 11%, 22%);
  --neutral-very-dark-violet: hsl(260, 8%, 14%);
  --font-poppins-500: 'Poppins', sans-serif;
  --font-poppins-700: 'Poppins', sans-serif;
  --font-size: clamp(1rem, 1.2rem, 1.5rem);
  font: var(--font-size) var(--font-poppins-500);
}

`;
