import type { PropsWithChildren } from "react";

import Flex from "shared/elements/Flex";
import type { FlexProps } from "shared/elements/Flex/index.types";
import Text from "shared/elements/Text";
import IconArrow from "shared/icons/IconArrow";

import type { MainCardItemHeaderProps, MainCardItemProps } from "./index.types";
import * as S from "./index.styles";

const MainCardItem = ({
  children,
  href,
}: PropsWithChildren<MainCardItemProps>) => {
  return <S.MainCardItem href={href}>{children}</S.MainCardItem>;
};

const MainCardItemHeader = ({ title }: MainCardItemHeaderProps) => {
  return (
    <Flex justifyContent="space-between">
      <Text variant="main">{title}</Text>
      <S.Arrow justifyContent="center" alignItems="center">
        <IconArrow />
      </S.Arrow>
    </Flex>
  );
};

const MainCardItemContents = ({
  children,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <Flex grows={1} {...props}>
      {children}
    </Flex>
  );
};

MainCardItem.Header = MainCardItemHeader;
MainCardItem.Contents = MainCardItemContents;
export default MainCardItem;
