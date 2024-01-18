import styled from 'styled-components';

interface ButtonProps {
  hasProductInCart: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 343px;

  margin: auto;
  padding: 10px 11px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const Image = styled.img`
  height: 190px;
  margin-bottom: 7px;
`;

export const Title = styled.h2`
  margin-top: 8px;
  margin-bottom: 2px;

  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.xbold};
  line-height: 16px;

  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Price = styled.p`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.xbold};
  line-height: 22px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 11px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.xbold};
  line-height: 16px;

  border-radius: ${({ theme }) => theme.border.radius};
  background: ${({ theme, hasProductInCart }) =>
    hasProductInCart ? theme.colors.green : theme.colors.secondary};

  text-transform: uppercase;
  cursor: pointer;

  span {
    margin-right: 12px;

    display: flex;
    gap: 5px;
  }
`;
