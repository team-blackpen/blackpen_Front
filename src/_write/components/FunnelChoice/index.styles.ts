import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Flex from "shared/elements/Flex";
import Stack from "shared/elements/Stack";

export const CategoryContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  position: sticky;
  top: 132px;
  z-index: 9;

  width: calc(100% + 20px);
  height: 41px;

  overflow: hidden;
`;

export const CategoryList = styled(motion(Flex))`
  padding-right: 20px;
  min-width: fit-content;
  height: 41px;

  & > button {
    flex-shrink: 0;
  }
`;

export const CategoryItem = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.black};
  `}

  padding: 8px 13px;
  width: fit-content;
  border-radius: 9999px;
`;

export const LetterContainer = styled(Stack)`
  margin-top: 8px;
`;

export const LetterListContainer = styled.div`
  width: calc(100% + 20px);
  height: 261px;

  overflow: hidden;
`;

export const LetterListTitle = styled(Flex)`
  height: 45px;

  div:nth-last-of-type(1) {
    cursor: pointer;
  }
`;

export const LetterList = styled(motion(Stack))`
  padding-right: 20px;
  min-width: fit-content;
  height: fit-content;

  & > button {
    flex-shrink: 0;
  }
`;

export const LetterItem = styled(Stack)`
  min-width: 132px;
  max-width: 182px;
`;

export const LetterImageContainer = styled(Flex)`
  width: 100%;
  height: 182px;
  border: 1px solid red;
`;
