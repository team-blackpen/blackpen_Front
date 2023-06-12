import { type ForwardedRef, type PropsWithChildren, forwardRef } from "react";

import type { StackProps } from "./index.types";
import * as S from "./index.styles";

const Stack = (
  {
    children,
    direction = "column",
    gap = 0,
    ...props
  }: PropsWithChildren<StackProps>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.Stack direction={direction} gap={gap} ref={ref} {...props}>
      {children}
    </S.Stack>
  );
};

export default forwardRef(Stack);
