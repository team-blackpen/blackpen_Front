import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { IconButtonStylesPrpos } from "./index.types";

export const IconButton = styled.button<IconButtonStylesPrpos>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
`;
