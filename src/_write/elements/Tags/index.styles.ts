import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Flex from "shared/elements/Flex";
import type { TagsStyleProps } from "./index.type";

export const Tags = styled(Flex)<TagsStyleProps>`
  ${({ theme, height, padding }) => css`
    height: ${height};
    padding: ${padding};
    background-color: ${theme.colors.gray1};
  `}

  max-width: calc(100% / 3);

  border-radius: 4px;
`;
