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
    background-color: ${theme.colors.white};
  `}

  position: fixed;
  top: 64px;
  left: 0;
  z-index: 99;

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

    width: calc((${step} / 3) * 100%);
  `}

  position: absolute;
  top: 0;

  height: 4px;
  border-radius: 9999px;
`;
