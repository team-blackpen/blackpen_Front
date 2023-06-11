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
  grows = 0,
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
      grows={grows}
      gap={gap}
      {...props}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
