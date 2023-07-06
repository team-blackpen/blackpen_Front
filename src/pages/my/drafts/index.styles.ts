import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dialog } from "@headlessui/react";
import Bottom from "shared/elements/Bottom";

import Flex from "shared/elements/Flex";
import Grid from "shared/elements/Grid";

export const Pop = styled(Dialog)`
  position: absolute;
  top: 52px;
  right: 20px;
  z-index: 99;
`;

export const Panel = styled(Dialog.Panel)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 120px;
  height: 41px;
  padding: 0 16px;
  border-radius: 7px;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.25);
`;

export const Announce = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `};

  position: sticky;
  top: 64px;
  z-index: 9;

  height: 32px;
`;

export const Item = styled(Grid)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray2};
  `}

  position: relative;
  height: 120px;

  button {
    position: absolute;
    top: 20.5px;
    right: 24px;
    z-index: 9;
  }
`;

export const ImageContainer = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    border-bottom: 1px solid ${theme.colors.gray2};
  `}

  position: relative;

  height: 120px;
  aspect-ratio: 1 / 1;
`;

export const Image = styled.div`
  position: relative;

  width: calc(100% - 30px);
  height: calc(100% - 30px);

  filter: drop-shadow(1.19318px 1.67045px 2.38636px rgba(0, 0, 0, 0.2));

  img {
    object-fit: contain;
  }
`;

export const Desc = styled(Flex)`
  min-width: 0;
  padding: 20px 20px 20px 16px;
`;

export const BottomCustom = styled(Bottom)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray2};
  `};

  padding-top: 16px;
`;
