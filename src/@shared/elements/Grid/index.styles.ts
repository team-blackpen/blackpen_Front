import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { GridStyleProps } from "./index.types";

export const Grid = styled.div<GridStyleProps>`
  ${({
    templateColumns,
    templateRows,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    columnGap,
    rowGap,
  }) => css`
    grid-template-columns: ${templateColumns};
    grid-template-rows: ${templateRows};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${gap}px;
    column-gap: ${gap || columnGap}px;
    row-gap: ${gap || rowGap}px;
  `}

  display: grid;
  background-color: transparent;
`;
