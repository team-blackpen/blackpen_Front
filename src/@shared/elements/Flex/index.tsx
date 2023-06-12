import { type ForwardedRef, type PropsWithChildren, forwardRef } from "react";

import type { FlexProps } from "./index.types";
import * as S from "./index.styles";

const Flex = (
  {
    children,
    display = "flex",
    direction = "row",
    wrap = "nowrap",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    grows = 0,
    gap = 0,
    ...props
  }: PropsWithChildren<FlexProps>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.Flex
      display={display}
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      grows={grows}
      gap={gap}
      ref={ref}
      {...props}
    >
      {children}
    </S.Flex>
  );
};

export default forwardRef(Flex);
