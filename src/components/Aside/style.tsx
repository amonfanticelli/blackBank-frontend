import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 0px;
  }
`;
