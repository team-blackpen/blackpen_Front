import type { PropsWithChildren } from "react";

import type { LayoutProps } from "./index.types";
import * as S from "./index.styles";

const Layout = ({
  children,
  backgroundColor = "white",
}: PropsWithChildren<LayoutProps>) => {
  return <S.Layout backgroundColor={backgroundColor}>{children}</S.Layout>;
};

export default Layout;
