import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Flex from "shared/elements/Flex";

export const Tags = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray1};
  `}

  padding: 2px 4px;
  border-radius: 4px;
`;
