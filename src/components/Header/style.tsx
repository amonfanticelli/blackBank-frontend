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
    position: relative;
    padding: 1.4rem 1.1rem;
    padding-right: 1.1rem;
    font-size: 1.4rem;
    color: var(--color-black);
    letter-spacing: 0.3rem;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    user-select: none;

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: inherit;
      z-index: -1;
    }

    &:hover {
      color: red;
      transition-delay: 0.5s;
    }
    &:hover:before {
      transition-delay: 0s;
    }

    &:hover:after {
      background: blue;
      transition-delay: 0.35s;
    }
  }
`;
