import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { BasicButtonStyleProps } from "./index.types";

export const BasicButton = styled.button<BasicButtonStyleProps>`
  ${({ theme, variant, color, fontColor }) => {
    switch (variant) {
      case "solid": {
        return css`
          background-color: ${theme.colors[color]};
          color: ${theme.colors[fontColor]};
        `;
      }
      case "outline": {
        return css`
          background-color: transparent;
          border: 1px solid ${theme.colors[color]};
          color: ${theme.colors[color]};
        `;
      }
    }
  }};

  ${({ theme }) => theme.texts.subtitle1};

  width: 100%;
  height: 54px;
  border-radius: 10px;
`;
