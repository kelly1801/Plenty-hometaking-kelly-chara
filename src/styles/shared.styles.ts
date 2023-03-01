import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary-cyan);
  border: none;
  outline: none;
  padding: 0.5rem 0.9rem;
  color: var(--White);
  font-size: 1rem;
  font-weight: 700;
  border-radius: 1rem;
  width: 80%;
  cursor: pointer;

  &:hover {
    background-color: #9ae3e3;
  }
`;