import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 940px;
  height: calc(100vh - var(--header-height));
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: lds-dual-ring 1.2s linear infinite;

    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
