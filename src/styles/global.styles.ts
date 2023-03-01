import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;

}

html,
body {
  background-color: var(--White);
}

:root {
  --primary-cyan: hsl(180, 66%, 49%);
  --primary-dark-violet: hsl(257, 27%, 26%);
  --secondary-red: hsl(0, 87%, 67%);
  --neutral-gray: hsl(0, 0%, 75%);
  --neutral-grayish-violet: hsl(257, 7%, 63%);
  --neutral-very-dark-blue: hsl(255, 11%, 22%);
  --neutral-very-dark-violet: hsl(260, 8%, 14%);
  --White: #fff;
  --font-poppins-500: 500  1rem/2rem 'Poppins', sans-serif ;
  --font-poppins-700: 700  1rem/2rem 'Poppins', sans-serif;
 
  font: var(--font-poppins-500);
}

`;
