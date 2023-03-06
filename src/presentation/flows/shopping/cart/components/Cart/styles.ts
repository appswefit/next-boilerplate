import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 940px;

  margin: 0 auto;
  padding: 16px;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};

  @media screen and (min-width: 1024px) {
    height: 100%;
  }
`;

export const TotalWrapper = styled.div`
  padding-top: 21px;
  display: flex;
  flex-direction: column;

  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  @media screen and (min-width: 640px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Total = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (min-width: 640px) {
    margin-bottom: 0;
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: ${({ theme }) => theme.font.xbold};
    line-height: 19px;

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.gray};
  }

  strong {
    width: 130px;
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-weight: ${({ theme }) => theme.font.xbold};
    line-height: 33px;

    color: ${({ theme }) => theme.colors.primary};

    text-align: center;
  }
`;
