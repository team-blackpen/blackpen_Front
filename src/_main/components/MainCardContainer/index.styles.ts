import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Flex from "shared/elements/Flex";
import Grid from "shared/elements/Grid";

export const MainCardContainer = styled(Grid)`
  padding: 20px 0;
`;

export const DraftsItem = styled(Flex)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray2};
  `}

  &:nth-last-of-type(1) {
    border-bottom: none;
  }

  height: 36px;
`;
