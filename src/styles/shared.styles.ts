import styled, {css} from "styled-components";

interface LinkProps {
  variant: 'large' | 'short'
}
interface ButtonProps {
  copy?: boolean;
  borderRadius?: string
}
export const Button = styled.button<ButtonProps>`
  background-color: var(--primary-cyan);
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  color: var(--White);
  font-size: 1rem;
  font-weight: 700;
  border-radius: ${(props) => props.borderRadius || '1rem' };
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #9ae3e3;
  }
    @media (min-width: 768px) {

      width: max-content;

    }

    ${(props) =>
    props.copy  &&
    css`
        background: var(--primary-dark-violet);
      &:hover {
    background-color: var(--neutral-grayish-violet);
  }
    `}
`;

export const Link = styled.p<LinkProps>`
text-align: left;
width: 100%;
margin: 0.5rem 0;
${(props) =>
    props.variant === 'large' &&
    css`
      color: var(--neutral-very-dark-violet)
    
    `}
    ${(props) =>
    props.variant === 'short' &&
    css`
      color: var(--primary-cyan);
   
    `}

`