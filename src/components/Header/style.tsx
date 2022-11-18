import styled from "styled-components";

export const Header = styled.header`
  width: calc(100% -6rem);
  height: 10vh;
  min-height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-black);
  padding-right: 6rem;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  img {
    min-width: 15.625rem;
    width: 20%;
    height: 100%;
  }

  button {
    position: relative;
    padding: 1.4rem 1.1rem;
    padding-right: 1.1rem;
    font-size: 1.4rem;
    color: var(--color-black);
    letter-spacing: 0.3rem;

    &:hover {
      color: var(--color-red);

      transition: 0.8s;
    }
  }
  @media screen and (max-width: 1000px) {
    width: calc(100% -6rem);
  }
`;
