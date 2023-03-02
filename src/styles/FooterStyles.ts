import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-very-dark-violet);
  color: var(--White);
  padding: 1.5rem;
  gap: 2rem;

  @media (max-width: 768px) {
  }
`;

export const Logo = styled.div`
  h4 {
    font: var(--font-poppins-700);
    font-size: 2.6rem;
  }
`;
export const FooterLink = styled.a`
  color: var(--white);
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--primary-cyan);
  }
`;

export const Heading = styled.h3`
  font: var(--font-poppins-700);
  font-size: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ColumnWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  li {
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
