import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dialog } from "@headlessui/react";

import Flex from "../Flex";

export const ModalContainer = styled(Dialog)`
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

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100dvh;
  padding: 0 40px;
  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(2px);
`;

export const ModalPanel = styled(Dialog.Panel)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};

  width: 100%;
  border-radius: 14px;
`;

export const ModalDescription = styled(Dialog.Description)`
  padding: 16px;
`;

export const ModalButton = styled(Flex)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray1};
  `}

  padding: 8px;
`;
