import type { PropsWithChildren } from "react";

import type { FlexProps } from "./index.types";
import * as S from "./index.styles";

const Flex = ({
  children,
  display = "flex",
  direction = "row",
  wrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap = 0,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <S.Flex
      display={display}
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      {...props}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
