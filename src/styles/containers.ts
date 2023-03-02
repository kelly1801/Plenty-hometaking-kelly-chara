import styled, { css } from "styled-components";
import { ErrorMessage } from 'formik';

interface ColumContainerProps {
  form?: boolean;
  link?: boolean;
  links?: boolean;
}
interface SectionContainerProps {
  main?: boolean;
  boost?: boolean;
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

interface TextContainerProps {
  stats?: boolean;
}
export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 1rem;
  h2,
  h3,
  h4 {
    font-size: 2.6rem;
    line-height: 48px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 30px;
    font-weight: 500;
    color: var(--neutral-grayish-violet);
  }

  ${(props) =>
    props.stats &&
    css`
      background-color: var(--White);
      position: relative;
      padding: 2rem;
  z-index: 2;  

      h4 {
        font-size: 1.3rem;
      }
      p {
        font-size: 0.9rem;
      }
      figure {
        position: absolute;
        border-radius: 50%;
        top: -15%;
        left: 50%;
        transform: translate(-50%, 15%);
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          height: auto;
          padding: 0.5rem;
          background-color: var(--primary-dark-violet);
        }
      }

      @media (min-width: 768px) {
    padding: 1rem;

    figure {
       max-width: 3.5rem;
        top: -3rem;
        left: 20%;
        transform: translate(-20%, 25%);
        

    `}
`;
export const Figure = styled.figure``;
export const ColumnContainer = styled.div<ColumContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${Figure} {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    ${Figure} {
      width: 50%;
    }
    ${TextContainer} {
      text-align: left;
      align-items: flex-start;
      max-width: 500px;
    }
  }
`;
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 4rem 0;
  gap: 4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    > *:not(:first-child) {
      margin-bottom: 10px;
    }

    > *:nth-child(2) {
      margin-bottom: -60px;
    }
    > *:nth-child(3) {
      margin-bottom: -100px;
    }
  }
`;

export const Error = styled.span`
color: var(--secondary-red);
width: 100%;
font-size: 0.7rem;
position: absolute;
top: 40%;
left: 10%;
`
export const Form = styled(ColumnContainer)`
  background: var(--primary-dark-violet);
  border-radius: 5px;
  gap: 2rem;
  padding: 2rem;
  margin-top: -40%;
  position: relative;
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
    margin-top: -7.5%;
    input {
      width: 85%;
    }

    ${Error}{
      top: 65%;
      left: 2rem;
    }
  }
`;
export const LinksWrapper = styled(ColumnContainer)`
  background: var(--White);
  padding: 2rem;
  border-radius: 5px;
  margin-top: 1rem;

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
export const Line = styled.div`
  &::after {
    content: "";
    position: absolute;
    top: 35%;
    left: 50%;
    width: 8px;
    height: 100%;
    max-height: 700px;
    transform: translateX(-35%, -50%);
    background-color: var(--primary-cyan);
    z-index: 1;
  }

  @media (min-width: 768px) {
    &::after {
      top: 50%;
      left: 20%;
      width: 700px;
      height: 8px;
    }
  }
`;
export const SectionContainer = styled.section<SectionContainerProps>`
  padding: 4rem 2rem;
  position: relative;
  padding-bottom: 8rem;
  @media (min-width: 768px) {
    padding: 2rem 6rem;
  }

  ${(props) =>
    props.main &&
    css`
      background-color: var(--neutral-light-violet);
    `}
  ${(props) =>
    props.boost &&
    css`
    background-color: var(--primary-dark-violet);
    h4 {
      color: var(--White);
      margin-bottom: 1rem;

    }
  }
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
