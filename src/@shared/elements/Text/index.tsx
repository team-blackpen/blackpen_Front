import type { PropsWithChildren } from "react";

import type { TextProps } from "./index.types";
import * as S from "./index.styles";

const Text = ({
  children,
  variant = "body1",
  fontColor = "black",
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <S.Text variant={variant} fontColor={fontColor} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
