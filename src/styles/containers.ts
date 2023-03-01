import styled from "styled-components";

export const PageContainer = styled.main`
  background-color: #fff;
  position: relative;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  h2 {
    font-size: 2.6rem;
    line-height: 48px;
    font-weight: 700;
  }
  p {
    font-size: 1.1rem;
    line-height: 30px;
    font-weight: 500;
    color: var(--neutral-gray);
  }
`;
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  figure {
    width: 100%;
 
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    figure {
    width: 50%;
  }
    ${TextContainer} {
      text-align: left;
      align-items: flex-start;
      padding: 2rem;
      max-width: 500px;
      button {
        width: max-content;
      }
    }
  }
`;

export const SectionContainer = styled.section`
  overflow: hidden;
  padding: 2rem;
`;
export const FlexList = styled.ul`
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: var(--neutral-gray);
  display: none;
  li {
    &:hover {
      color: var(--neutral-very-dark-violet);
    }
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;
