import type { PropsWithChildren } from "react";

import Stack from "shared/elements/Stack";
import Text from "shared/elements/Text";

import type { InputProps, LabelProps } from "./index.types";
import * as S from "./index.styles";

const Input = ({ spellCheck = false, ...props }: InputProps) => {
  return <S.Input spellCheck={spellCheck} {...props} />;
};

const Label = ({
  children,
  required = false,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Stack direction="row" gap={4}>
      <Text variant="subtitle2">{children}</Text>
      {required && <Text variant="subtitle2" fontColor="blue">{`(필수)`}</Text>}
    </Stack>
  );
};

const Container = ({ children }: PropsWithChildren) => {
  return <Stack gap={8}>{children}</Stack>;
};

Input.Label = Label;
Input.Container = Container;
export default Input;
