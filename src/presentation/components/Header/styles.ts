import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.header`
  height: var(--header-height);
  max-width: 960px;
  margin: auto;

  padding: 0 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.xbold};
  line-height: 27px;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xsmall};

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: end;

    @media screen and (min-width: 1024px) {
      height: 74px;
    }
  }
`;

export const MyCart = styled.strong`
  display: none;

  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 19px;

  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const CartItens = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};

  line-height: 16px;

  color: ${({ theme }) => theme.colors.gray};
`;
