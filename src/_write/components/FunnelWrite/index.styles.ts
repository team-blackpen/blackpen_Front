import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Flex from "shared/elements/Flex";
import Text from "shared/elements/Text";

export const LetterContainer = styled(Flex)`
  position: relative;
`;

export const Guide = styled(Text)`
  position: absolute;
`;

export const LetterItem = styled.div`
  width: 248px;
  height: 372px;
  padding: 12px 15px;
  background-color: #f4eedd;
`;

export const TextArea = styled.textarea<{
  lineHeight: number;
  fontSize: number;
}>`
  ${({ lineHeight, fontSize }) => css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;

    height: ${lineHeight}px;
  `}

  width: 100%;

  overflow-y: hidden;
`;

export const PaginationContainer = styled(Flex)`
  margin-top: 8px;
`;

export const Pagination = styled.div<{ page: boolean }>`
  ${({ theme, page }) => css`
    background-color: ${page ? theme.colors.gray5 : theme.colors.gray2};
  `}

  width: 6px;
  height: 6px;
  border-radius: 999px;
`;

export const ButtonCatiner = styled(Flex)`
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const NaviPrev = styled.button`
  position: absolute;
  left: 0;
`;

export const NaviNext = styled.button`
  position: absolute;
  right: 0;

  rotate: 180deg;
`;
