import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Text from "shared/elements/Text";
import IconDrawer from "shared/icons/IconDrawer";

const MainHeader = () => {
  return (
    <Header backgroundColor="gray1">
      <Header.Left>
        <Text variant="headline1">Logo</Text>
      </Header.Left>
      <Header.Right>
        <IconButton icon={<IconDrawer />} />
      </Header.Right>
    </Header>
  );
};

export default MainHeader;
