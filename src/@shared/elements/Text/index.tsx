import type { PropsWithChildren } from "react";

import type { TextProps } from "./index.types";
import * as S from "./index.styles";

const Text = ({
  children,
  variant = "body1",
  display = "block",
  fontColor = "black",
  width = "",
  textAlign = "left",
  truncate = false,
  lineClamp = false,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <S.Text
      variant={variant}
      fontColor={fontColor}
      display={display}
      width={width}
      textAlign={textAlign}
      truncate={truncate}
      lineClamp={lineClamp}
      {...props}
    >
      {children}
    </S.Text>
  );
};

export default Text;
