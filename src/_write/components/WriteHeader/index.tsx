import { useRouter } from "next/router";

import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Text from "shared/elements/Text";
import IconBack from "shared/icons/IconBack";

const WriteHeader = () => {
  const { back } = useRouter();
  const handleClickBack = () => {
    back();
  };

  return (
    <Header>
      <Header.Left>
        <IconButton icon={<IconBack />} onClick={handleClickBack} />
      </Header.Left>
      <Header.Center>
        <Text variant="subtitle1">편지지 리스트</Text>
      </Header.Center>
    </Header>
  );
};

export default WriteHeader;
