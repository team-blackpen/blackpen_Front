import type { PropsWithChildren } from "react";

import type { FlexProps } from "shared/elements/Flex/index.types";
import type { BottomProps } from "./index.types";
import * as S from "./index.styles";

const Bottom = ({
  children,
  backgroundColor = "white",
  height = "86px",
  gap = 8,
  ...props
}: PropsWithChildren<BottomProps & FlexProps>) => {
  return (
    <S.Bottom
      display="flex"
      gap={gap}
      backgroundColor={backgroundColor}
      height={height}
      {...props}
    >
      {children}
    </S.Bottom>
  );
};

export default Bottom;
