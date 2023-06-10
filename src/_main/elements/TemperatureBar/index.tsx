import type { TemperatureBarProps } from "./index.types";
import * as S from "./index.styles";

const TemperatureBar = ({ temperature, color }: TemperatureBarProps) => {
  return (
    <S.Slider>
      <S.Track temperature={temperature} color={color} />
    </S.Slider>
  );
};

export default TemperatureBar;
