import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type { LayoutStyleProps } from "./index.types";

export const Layout = styled.div<LayoutStyleProps>`
  ${({ theme, backgroundColor, padding }) => css`
    @media (${theme.medias.sm}) {
      position: absolute;
      ${theme.styles.smallWidth};
    }

    ${theme.styles.fullWidth};

    padding: ${padding};
    background-color: ${theme.colors[backgroundColor]};
  `}

  position: relative;
  height: 100dvh;
`;
