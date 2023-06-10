import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { FlexStyleProps } from "./index.types";

export const Flex = styled.div<FlexStyleProps>`
  ${({ display, direction, wrap, justifyContent, alignItems, gap }) => css`
    display: ${display};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap}px;
  `}

  position: relative;

  background-color: transparent;

  & > * {
    flex-shrink: 0;
  }
`;
