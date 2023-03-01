import styled, { css } from "styled-components";

interface ColumContainerProps {
  form?: boolean;
}
interface SectionContainerProps {
 main?: boolean;
}
export const PageContainer = styled.main`
  background-color: #fff;
  position: relative;
 padding: 0 2rem;
overflow-x: hidden;  
  @media (min-width: 768px) {
    padding: 0 6rem;
      }
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

export const ColumnContainer = styled.div<ColumContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  figure {
    width: 100%;
  }
  ${(props) =>
    props.form &&
    css`
      background: var(--primary-dark-violet);
      border-radius: 5px;
      gap: 2rem;
      padding: 2rem 0;
      input {
        width: 80%;
        height: 2rem;
        outline: none;
        padding-left: 0.5rem;
        letter-spacing: 0.12px;
        color: var(--neutral-gray);
      }

      button {
        border-radius: 5px;
      }

      @media (min-width: 768px) {
        flex-direction: row !important;
        padding: 2rem;
       input {
        flex-grow: 3;
       }
      button {
        width: max-content;
      }
    `}
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    figure {
      width: 50%;
    }
    ${TextContainer} {
      text-align: left;
      align-items: flex-start;
      max-width: 500px;
      button {
        width: max-content;
      }
    }
  }
`;

export const SectionContainer = styled.section<SectionContainerProps>`
 


  ${(props) =>
    props.main &&
    css`

    `}
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
