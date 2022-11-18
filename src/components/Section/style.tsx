import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 2rem;
  padding: 1rem;
  border: 1px solid red;

  h2 {
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    margin-bottom: 1rem;
    button {
      height: 2.5rem;

      background: var(--color-white);
      border: 1.4px solid #e9ecef;
      border-radius: 8px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.188rem;
      text-align: center;
      color: #343a40;
      cursor: pointer;
      transition: 0.8s;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 0px;
  }
`;
