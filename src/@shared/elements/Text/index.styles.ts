import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { TextStyleProps } from "./index.types";

export const Text = styled.span<TextStyleProps>`
  ${({
    theme,
    variant,
    fontColor,
    display,
    width,
    textAlign,
    truncate,
    lineClamp,
  }) => css`
    display: ${display};

    width: ${width};

    color: ${theme.colors[fontColor]};
    ${theme.texts[variant]};
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

    ${!!lineClamp &&
    css`
      display: -webkit-box;

      white-space: wrap;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
    `}
  `}

  min-width: 0;
`;
