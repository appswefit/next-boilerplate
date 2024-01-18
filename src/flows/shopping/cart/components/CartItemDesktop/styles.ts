import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.tr`
  td:first-child {
    display: flex;
    align-items: center;
  }

  td {
    margin-bottom: 21px;
  }
`;

export const TitleAndPriceWrapper = styled.div``;

export const StyledImage = styled(Image)`
  height: 114px;
  width: 89px;

  margin-right: 52px;
`;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.xbold};
  line-height: 19px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.xbold};
  line-height: 22px;
`;

export const Subtotal = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 16px;

  color: ${({ theme }) => theme.colors.gray};
`;
