import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  min-height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--color-black);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  img {
    min-width: 15.625rem;
    width: 20%;
    height: 100%;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 10px;
    background: var(--color-white);

    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: purple;
      color: white;
    }
  }
`;
