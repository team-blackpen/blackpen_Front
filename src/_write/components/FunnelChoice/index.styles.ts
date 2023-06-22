import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Flex from "shared/elements/Flex";
import Stack from "shared/elements/Stack";
import Text from "shared/elements/Text";

export const CategoryContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  position: sticky;
  top: 132px;
  z-index: 9;
  overflow: hidden;

  width: calc(100% + 20px);
  height: 49px;
`;

export const CategoryList = styled(motion(Flex))`
  padding-right: 20px;
  min-width: fit-content;
  height: 49px;

  & > button {
    flex-shrink: 0;
  }
`;

export const CategoryItem = styled.button<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    border: 1px solid ${selected ? theme.colors.black : theme.colors.gray3};
  `}

  padding: 8px 13px;
  width: fit-content;
  border-radius: 9999px;
`;

export const AllLetterList = styled(Stack)`
  margin-top: 8px;
`;

export const LetterListTitle = styled(Flex)`
  height: 45px;

  div:nth-last-of-type(1) {
    cursor: pointer;
  }
`;

export const LetterListContainer = styled.div`
  overflow: hidden;

  width: calc(100% + 20px);
`;

export const LetterList = styled(motion(Stack))`
  padding-right: 20px;
  min-width: fit-content;

  & > div {
    flex-shrink: 0;
  }
`;

export const LetterItem = styled.div`
  min-width: 132px;
  max-width: 182px;
`;

export const LetterImage = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
  `}

  width: 182px;
  aspect-ratio: 1 / 1;
  border-radius: 14px;

  div {
    position: relative;

    width: calc(100% - 32px);
    height: calc(100% - 32px);

    filter: drop-shadow(1.19318px 1.67045px 2.38636px rgba(0, 0, 0, 0.2));

    img {
      object-fit: contain;
    }
  }
`;

export const LetterTitle = styled(Text)`
  margin-top: 8px;
  height: 24px;
`;

export const LetterTags = styled(Stack)`
  margin-top: 2px;
  height: 21px;
`;

export const LetterArtist = styled(Stack)`
  margin-top: 10px;
`;
