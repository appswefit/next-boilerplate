import Image from 'next/image';
import styled from 'styled-components';

interface ImageProps {
  $imgPadding: boolean;
}

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;

  padding: 64px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};

  @media screen and (min-width: 1024px) {
    margin-top: 24px;
  }

  h2 {
    margin-bottom: 32px;
    padding: 0 64px;

    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.xbold};
    line-height: 27px;

    text-align: center;
  }
`;

export const StyledImage = styled(Image)<ImageProps>`
  margin-bottom: 32px;
  padding: ${props => (props.$imgPadding ? '0 24px' : '0')};
`;
