import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type { LayoutStyleProps } from "./index.types";

export const Layout = styled.div<LayoutStyleProps>`
  ${({ theme, backgroundColor }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallScreen};
    }

    ${theme.styles.fullScreen};

    background-color: ${theme.colors[backgroundColor]};
  `}

  padding: 0 20px;
`;
