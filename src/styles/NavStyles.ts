import styled from "styled-components";

export const Menu = styled.ul`
  position: absolute;
  background-color: var(--primary-dark-violet);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  color: var(--White);
  gap: 5px;
  padding: 0 2rem;
  top : 5rem;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, 0);
  padding-bottom: 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  

`;
export const MenuItem = styled.li`
  margin: 0.8rem 0;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  padding: 3rem 2rem;

  @media (min-width: 768px) {
    padding: 3rem 6rem;
    ${Menu} {
      display: none;
      background-color: red;
    }
  }
`;
