import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { StackStyleProps } from "./index.types";

export const Stack = styled.div<StackStyleProps>`
  ${({ direction, gap }) => css`
    flex-direction: ${direction};
    gap: ${gap}px;
  `}

  display: flex;
  background-color: transparent;

  & > * {
    flex-shrink: 0;
  }
`;
