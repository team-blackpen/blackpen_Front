import TemperatureBar from "main/elements/TemperatureBar";

import Flex from "shared/elements/Flex";
import Stack from "shared/elements/Stack";
import Text from "shared/elements/Text";
import IconTempHeart from "shared/icons/IconTempHeart";

import * as S from "./index.styles";

const TemperatureContainer = () => {
  const temperature = 80;
  const color = "black";

  return (
    <S.TemperatureContainer gap={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Stack gap={4}>
          <Text variant="headline2">민수님의</Text>
          <Text variant="main">마음이 뜨거워요 :)</Text>
        </Stack>

        <Flex alignItems="center" gap={8}>
          <Text variant="subtitle1">{temperature} &#8451;</Text>
          <Text fontColor={color}>
            <IconTempHeart />
          </Text>
        </Flex>
      </Flex>

      <TemperatureBar temperature={temperature} color={color} />
    </S.TemperatureContainer>
  );
};

export default TemperatureContainer;
