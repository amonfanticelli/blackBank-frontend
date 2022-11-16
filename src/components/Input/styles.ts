import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  input {
    width: 85%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;
    color: var(--color-white);
    background-color: var(--color-black);
    border: 1.2182px solid #343b41;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }

  span {
    width: 155px;
    position: absolute;
    background-color: #f10;
    padding: 4px 15px;
    border-radius: 3px;
    opacity: 0;
    transition: opacity 0.4s;
  }
`;
export const Label = styled.label`
  width: 85%;
`;
