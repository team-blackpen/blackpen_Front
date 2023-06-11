import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Flex from "shared/elements/Flex";

export const MainCardItem = styled(Link)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  display: flex;
  flex-direction: column;

  padding: 16px;
  height: 169px;
  border-radius: 14px;
`;

export const Arrow = styled(Flex)`
  width: 24px;
  height: 24px;
`;
