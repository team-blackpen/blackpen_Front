import type { HTMLAttributes } from "react";
import type { ColorsType } from "shared/styles/globalTheme";

interface Types {
  temperature: number;
  color: ColorsType;
}

export type TemperatureBarProps = Required<Types> &
  HTMLAttributes<HTMLDivElement>;
export type TemperatureBarStyleProps = Required<Types>;
