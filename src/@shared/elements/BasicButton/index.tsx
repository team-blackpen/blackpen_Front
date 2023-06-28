import type { PropsWithChildren } from "react";

import type { BasicButtonProps } from "./index.types";
import * as S from "./index.styles";

const BasicButton = ({
  children,
  variant = "solid",
  color = "black",
  fontColor = "white",
  fontVariant = "subtitle1",
  width = "100%",
  height = "54px",
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.BasicButton
      variant={variant}
      color={color}
      fontColor={fontColor}
      fontVariant={fontVariant}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </S.BasicButton>
  );
};

export default BasicButton;
