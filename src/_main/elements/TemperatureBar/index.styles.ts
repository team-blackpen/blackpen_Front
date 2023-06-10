import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { TemperatureBarStyleProps } from "./index.types";

export const Slider = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray2};
  `}

  position: relative;

  height: 4px;
  border-radius: 9999px;
`;

export const Track = styled.div<TemperatureBarStyleProps>`
  ${({ theme, color, temperature }) => css`
    background-color: ${theme.colors[color]};
    width: ${temperature}%;
  `}

  position: absolute;
  top: 0;
  left: 0;

  height: 4px;
  border-radius: 9999px;
`;
