import type { PropsWithChildren } from "react";

import type { GridProps } from "./index.types";
import * as S from "./index.styles";

const Grid = ({
  children,
  templateColumns = "repeat(2, 1fr)",
  templateRows = "none",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  alignContent = "start",
  gap = 0,
  columnGap = 0,
  rowGap = 0,
  ...props
}: PropsWithChildren<GridProps>) => {
  return (
    <S.Grid
      templateColumns={templateColumns}
      templateRows={templateRows}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      {...props}
    >
      {children}
    </S.Grid>
  );
};

export default Grid;
