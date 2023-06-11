import type { PropsWithChildren } from "react";

import type { HeaderProps } from "./index.types";
import * as S from "./index.styles";

const Header = ({
  children,
  backgroundColor = "white",
}: PropsWithChildren<HeaderProps>) => {
  return <S.Header backgroundColor={backgroundColor}>{children}</S.Header>;
};

const HeaderLeft = ({ children }: PropsWithChildren) => {
  return <S.HeaderLeft alignItems="center">{children}</S.HeaderLeft>;
};

const HeaderCenter = ({ children }: PropsWithChildren) => {
  return <S.HeaderCenter alignItems="center">{children}</S.HeaderCenter>;
};

const HeaderRight = ({ children }: PropsWithChildren) => {
  return <S.HeaderRight alignItems="center">{children}</S.HeaderRight>;
};

Header.Left = HeaderLeft;
Header.Center = HeaderCenter;
Header.Right = HeaderRight;
export default Header;
