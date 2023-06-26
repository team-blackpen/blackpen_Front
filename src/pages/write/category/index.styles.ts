import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "shared/elements/Flex";
import Grid from "shared/elements/Grid";
import Stack from "shared/elements/Stack";
import Text from "shared/elements/Text";

export const LetterList = styled(Grid)`
  margin-top: 8px;
  min-height: fit-content;
`;

export const LetterItem = styled.div`
  min-width: 0;
`;

export const LetterImage = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
  `}

  position: relative;

  min-height: 192px;
  aspect-ratio: 157 / 192;
  border-radius: 14px;
`;

export const ImageContainer = styled.button`
  position: relative;

  width: calc(100% - 23px);
  height: calc(100% - 42px);

  filter: drop-shadow(1.19318px 1.67045px 2.38636px rgba(0, 0, 0, 0.2));

  img {
    object-fit: contain;
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
