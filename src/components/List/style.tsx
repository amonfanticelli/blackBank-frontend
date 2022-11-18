import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  li {
    display: flex;
    height: 5.438rem;
    width: 100%;
    background: #f8f9fa;
    border-radius: 4px;
    margin-bottom: 2rem;
    div {
      height: 5.438rem;
      width: 0.25rem;
      background: #03b898;
      margin-right: 0.875rem;
      border-radius: 4px 0px 0px 4px;
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 2rem;
      color: #212529;
      margin: 0;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;
      color: #343a40;
    }
  }
`;
