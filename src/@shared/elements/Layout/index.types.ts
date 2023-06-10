import type { HTMLAttributes } from "react";
import type { ColorsType } from "shared/styles/globalTheme";

interface Types {
  backgroundColor: ColorsType;
}

export type LayoutProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type LayoutStyleProps = Required<Types>;
