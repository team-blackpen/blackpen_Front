import type { PropsWithChildren } from "react";

import type { StackProps } from "./index.types";
import * as S from "./index.styles";

const Stack = ({
  children,
  direction = "column",
  gap = 0,
  ...props
}: PropsWithChildren<StackProps>) => {
  return (
    <S.Stack direction={direction} gap={gap} {...props}>
      {children}
    </S.Stack>
  );
};

export default Stack;
