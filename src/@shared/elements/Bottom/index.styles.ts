import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "shared/elements/Flex";
import type { BottomStyleProps } from "./index.types";

export const Bottom = styled(Flex)<BottomStyleProps>`
  ${({ theme, backgroundColor, height }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallWidth};
    }

    ${theme.styles.fullWidth};

    height: ${height};
    background-color: ${theme.colors[backgroundColor]};
  `}

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;

  padding: 0 20px;
`;
