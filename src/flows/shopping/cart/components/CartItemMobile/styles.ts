import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const StyledImage = styled(Image)`
  height: 82px;
  width: 64px;

  margin-right: 16px;
`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InfosHeader = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfosFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceAndDeleteWrapper = styled.div`
  display: flex;

  img {
    margin-left: 16px;
  }
`;

export const Title = styled.h3`
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
