import type { PropsWithChildren } from "react";

import type { LayoutProps } from "./index.types";
import * as S from "./index.styles";

const Layout = ({
  children,
  backgroundColor = "white",
  padding = "0 20px",
}: PropsWithChildren<LayoutProps>) => {
  return (
    <S.Layout backgroundColor={backgroundColor} padding={padding}>
      {children}
    </S.Layout>
  );
};

export default Layout;
