import styled, { css } from "styled-components";

interface ColumContainerProps {
  form?: boolean;
  link?: boolean;
  links?: boolean;
}
interface SectionContainerProps {
  main?: boolean;
}
interface FlexContainerProps {
  links?: boolean;
}
export const PageContainer = styled.main`
  position: relative;
  overflow-x: hidden;
`;
export const FlexContainer = styled.div<FlexContainerProps>`
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
    }
  }
`;
export const Form = styled(ColumnContainer)`
      background: var(--primary-dark-violet);
      border-radius: 5px;
      gap: 2rem;
      padding: 2rem;
      input {
        width: 100%;
        height: 2rem;
        outline: none;
        padding-left: 0.5rem;
        letter-spacing: 0.12px;
        color: var(--neutral-gray);
      }

      @media (min-width: 768px) {
         flex-direction: row;
       input {
        width: 85%;
       
      }
      }
       
`;
export const LinksWrapper = styled(ColumnContainer)`
  background: var(--White);
  padding: 2rem;
  border-radius: 5px;
  margin: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    hr {
      display: none;
    }
  }
`;

export const ShortLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: unset;

    flex-direction: row;
  }
`;
export const SectionContainer = styled.section<SectionContainerProps>`
  padding: 0 2rem;
  @media (min-width: 768px) {
    padding: 0 6rem;
  }

  ${(props) =>
    props.main &&
    css`
      background-color: var(--neutral-light-violet);
      height: 100vh;
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
