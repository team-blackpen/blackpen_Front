import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray2};

    &::placeholder {
      color: ${theme.colors.gray3};
    }
  `}

  width: 100%;
  height: 54px;
  padding: 0 16px;
  border-radius: 14px;
`;
