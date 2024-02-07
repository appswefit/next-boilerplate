import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;

  input {
    width: 59px;

    margin: 0 11px;
    padding: 3.5px 12px;

    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.border.radius};
  }
`;
