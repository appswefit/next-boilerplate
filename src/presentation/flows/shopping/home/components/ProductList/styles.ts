import styled from "styled-components";

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  gap: 16px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
