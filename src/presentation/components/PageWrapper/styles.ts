import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 960px;
  width: 100%;
  min-height: calc(100% - var(--header-height));

  margin: 0 auto;
  padding: 0 16px 28px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    margin: 24px auto 0;

    padding: 0 0 28px;
  }
`;
