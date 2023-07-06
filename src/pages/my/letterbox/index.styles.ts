import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dialog } from "@headlessui/react";
import Bottom from "shared/elements/Bottom";

import Flex from "shared/elements/Flex";

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

export const Item = styled(Flex)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
  `}

  position: relative;

  min-height: 140px;
  aspect-ratio: 124 / 140;

  button {
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 9;
  }
`;

export const Image = styled.div`
  position: relative;

  width: calc(100% - 34px);
  height: calc(100% - 50px);

  filter: drop-shadow(1.19318px 1.67045px 2.38636px rgba(0, 0, 0, 0.2));

  img {
    object-fit: contain;
  }
`;

export const Desc = styled(Flex)`
  position: absolute;
  bottom: 0;
  z-index: 9;

  width: 100%;
  height: 42px;
  padding: 0 8px;
  background-color: rgba(255, 255, 255, 0.5);

  backdrop-filter: blur(2px);
`;

export const BottomCustom = styled(Bottom)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray2};
  `};

  padding-top: 16px;
`;
