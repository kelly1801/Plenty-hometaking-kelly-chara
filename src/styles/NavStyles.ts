import styled from "styled-components";

export const Menu = styled.ul`
  background-color: var(--primary-dark-violet);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  color: var(--White);
  gap: 20px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding-bottom: 1rem;
  hr {
    width: 80%;
    color: var(--neutral-gray);
  }
`;
export const MenuItem = styled.li`
  margin: 1.2rem 0;
`;
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
    background-color: #9AE3E3;
  }
 

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: 2rem;

  @media (min-width: 768px) {
   padding: 2rem 4rem;
    ${Menu} {
      display: none;
      background-color: red;
    }
  }
`;

