import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "shared/elements/Flex";

import type { PageNumberStyleProps, TrackStyleProps } from "./index.types";

export const WritingProcess = styled.div`
  ${({ theme }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallWidth};
    }

    ${theme.styles.fullWidth};
  `}

  position: fixed;
  top: 64px;
  left: 0;
  z-index: 9;

  padding: 0 20px;
  height: 68px;
`;

export const PageNumber = styled(Flex)<PageNumberStyleProps>`
  ${({ theme, backgroundColor }) => css`
    background-color: ${theme.colors[backgroundColor]};
  `}

  width: 20px;
  height: 20px;
  border-radius: 9999px;
`;

export const Slider = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray2};
  `}

  position: relative;

  margin-top: 4px;
  height: 4px;
  border-radius: 9999px;
`;

export const Track = styled.div<TrackStyleProps>`
  ${({ theme, step }) => css`
    background-color: ${theme.colors.black};

    ${step === 1
      ? css`
          left: 0;
        `
      : step === 2
      ? css`
          left: 50%;
          transform: translateX(-50%);
        `
      : step === 3
      ? css`
          right: 0;
        `
      : null}
  `}

  position: absolute;
  top: 0;

  width: calc(100% / 3);
  height: 4px;
  border-radius: 9999px;
`;
