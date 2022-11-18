import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-height: 20rem;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 0px;
  }
`;

export const ButtonAside = styled.button`
  position: relative;
  padding: 0.5rem 0.5rem;
  padding-right: 0.5rem;
  font-size: 1rem;
  color: var(--color-black);
  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
    transition: 0.8s;
  }
`;

export const TitleAside = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const TotalBalance = styled.span`
  width: 100%;

  span {
    color: green;
  }
`;
