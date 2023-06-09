import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { TextStyleProps } from "./index.types";

export const Text = styled.span<TextStyleProps>`
  ${({ theme, variant, fontColor }) => css`
    ${theme.texts[variant]};
    color: ${theme.colors[fontColor]};
  `}
`;
