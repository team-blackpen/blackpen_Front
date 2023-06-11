import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { TextStyleProps } from "./index.types";

export const Text = styled.span<TextStyleProps>`
  ${({ theme, variant, fontColor, width, textAlign, truncate }) => css`
    ${theme.texts[variant]};
    width: ${width};

    color: ${theme.colors[fontColor]};
    text-align: ${textAlign};

    ${truncate
      ? css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `
      : css`
          white-space: pre-line;
        `}
  `}

  display: block;

  min-width: 0;
`;
