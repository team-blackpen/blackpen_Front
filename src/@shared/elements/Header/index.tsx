import type { PropsWithChildren } from "react";

import type { HeaderProps } from "./index.types";
import * as S from "./index.styles";
import Flex from "../Flex";

const Header = ({
  children,
  backgroundColor = "white",
}: PropsWithChildren<HeaderProps>) => {
  return (
    <S.Header backgroundColor={backgroundColor}>
      <Flex alignItems="center">{children}</Flex>
    </S.Header>
  );
};

const HeaderLeft = ({ children }: PropsWithChildren) => {
  return (
    <S.HeaderLeft>
      <Flex alignItems="center">{children}</Flex>
    </S.HeaderLeft>
  );
};

const HeaderCenter = ({ children }: PropsWithChildren) => {
  return (
    <S.HeaderCenter>
      <Flex alignItems="center">{children}</Flex>
    </S.HeaderCenter>
  );
};

const HeaderRight = ({ children }: PropsWithChildren) => {
  return (
    <S.HeaderRight>
      <Flex alignItems="center">{children}</Flex>
    </S.HeaderRight>
  );
};

Header.Left = HeaderLeft;
Header.Center = HeaderCenter;
Header.Right = HeaderRight;
export default Header;
