import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 200px;

  max-height: 20rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 3rem;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 0px;
  }
`;

export const FormDashboard = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px 20px;
  gap: 0.8rem;
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
  width: 85%;
  display: flex;
  justify-content: center;

  span {
    color: var(--color-green);
  }
`;
