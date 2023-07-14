import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "shared/elements/Flex";
import type { BottomStyleProps } from "./index.types";

export const Bottom = styled(Flex)<BottomStyleProps>`
  ${({ theme, backgroundColor, position, height }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallWidth};
    }

    ${theme.styles.fullWidth};

    position: ${position};

    height: ${height};
    background-color: ${theme.colors[backgroundColor]};
  `}

  bottom: 0;
  left: 0;
  z-index: 9;

  padding: 10px 20px 0 20px;
`;
