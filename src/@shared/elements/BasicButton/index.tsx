import type { PropsWithChildren } from "react";

import type { BasicButtonProps } from "./index.types";
import * as S from "./index.styles";

const BasicButton = ({
  children,
  variant = "solid",
  color = "black",
  fontColor = "white",
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.BasicButton
      variant={variant}
      color={color}
      fontColor={fontColor}
      {...props}
    >
      {children}
    </S.BasicButton>
  );
};

export default BasicButton;
