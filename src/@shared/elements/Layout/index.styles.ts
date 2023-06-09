import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Layout = styled.main`
  ${({ theme }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallScreen};
    }

    ${theme.styles.fullScreen};
  `}

  padding: 0 20px;
  background-color: gray;
`;
