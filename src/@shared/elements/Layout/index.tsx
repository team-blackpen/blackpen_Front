import type { PropsWithChildren } from "react";

import * as S from "./index.styles";

const Layout = ({ children }: PropsWithChildren) => {
  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
