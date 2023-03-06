import styled from "styled-components";

export const TextLink = styled.p`
  height: 40px;
  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.xbold};

  text-transform: uppercase;
  text-align: center;

  border-radius: ${({ theme }) => theme.border.radius};
  background: ${({ theme }) => theme.colors.secondary};
`;
