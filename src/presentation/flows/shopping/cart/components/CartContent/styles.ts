import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 940px;
  height: 100%;

  margin: auto;
  padding: 16px;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};

  @media screen and (min-width: 1024px) {
    height: auto;
  }
`;

export const CartMobile = styled.div`
  display: block;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Table = styled.table`
  display: none;

  @media screen and (min-width: 1024px) {
    display: inline-table;
  }
`;

export const Th = styled.th`
  padding-bottom: 21px;

  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.bold};

  line-height: 19px;

  text-align: left;
  text-transform: uppercase;
`;
