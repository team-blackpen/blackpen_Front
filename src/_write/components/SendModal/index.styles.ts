import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dialog } from "@headlessui/react";

export const Panel = styled(Dialog.Panel)`
  ${({ theme }) => css`
    @media (${theme.medias.sm}) {
      ${theme.styles.smallWidth};
    }

    ${theme.styles.fullWidth};

    background-color: ${theme.colors.white};
  `};

  position: fixed;
  top: 0;
  z-index: 999;

  height: 100dvh;
  padding: 164px 20px 86px 20px;
`;
