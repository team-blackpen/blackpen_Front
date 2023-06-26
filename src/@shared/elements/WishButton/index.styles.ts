import styled from "@emotion/styled";
import type { WishButtonStyleProps } from "./index.types";
import { css } from "@emotion/react";

export const WishButton = styled.button<WishButtonStyleProps>`
  ${({ wish, size, top, bottom, left, right }) => css`
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};

    width: ${size}px;
    height: ${size}px;

    color: ${wish ? "#FF4A33" : "#aaa"};
  `};

  position: absolute;
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.25));
`;
