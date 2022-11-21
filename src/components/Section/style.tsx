import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 1rem;
  box-shadow: 0px 4px 40px -10px rgb(0 0 0 / 25%);
  border-radius: 4px;

  h2 {
    display: flex;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  div {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    align-items: center;
    height: 2.5rem;
    margin-bottom: 1rem;
    button {
      height: 2.5rem;
      background: var(--color-white);
      border: 1.4px solid #e9ecef;
      border-radius: 8px;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.188rem;
      text-align: center;
      color: #343a40;
      &:hover {
        background-color: var(--color-black);
        color: var(--color-white);
        transition: 0.8s;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 1rem;
  }
`;

export const ImgDashboard = styled.img`
  width: 57%;
  margin-top: 1rem;
  /* max-height: 200px;
  min-width: 200px; */
`;
