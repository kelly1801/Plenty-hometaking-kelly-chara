import styled from "styled-components";

export const PageContainer = styled.main`
  background-color: #fff;
  position: relative;
`;
export const FlexContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexList = styled.ul`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: var(--neutral-gray);
  li {
  &:hover {
    
      color: var(--neutral-very-dark-violet);
    }
  }
`;
