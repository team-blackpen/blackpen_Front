import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { HeaderStyleProps } from "./index.types";

export const Header = styled.div<HeaderStyleProps>`
  ${({ theme, backgroundColor }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallWidth};
    }

    ${theme.styles.fullWidth};

    background-color: ${backgroundColor};
  `}

  position: fixed;
  top: 0;
  left: 0;

  height: 64px;
`;

export const HeaderChild = styled.div`
  position: absolute;

  & > * {
    gap: 8px;
  }
`;

export const HeaderLeft = styled(HeaderChild)`
  left: 20px;
`;

export const HeaderCenter = styled(HeaderChild)`
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderRight = styled(HeaderChild)`
  right: 20px;
`;
