import Flex from "shared/elements/Flex";

import type { IconButtonProps } from "./index.types";
import * as S from "./index.styles";

const IconButton = ({ icon, size = 40, ...props }: IconButtonProps) => {
  return (
    <S.IconButton size={size} {...props}>
      <Flex justifyContent="center" alignItems="center">
        {icon}
      </Flex>
    </S.IconButton>
  );
};

export default IconButton;
