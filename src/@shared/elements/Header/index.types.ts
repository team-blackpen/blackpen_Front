import type { HTMLAttributes } from "react";
import type { ColorsType } from "shared/styles/globalTheme";

interface Types {
  /**
   * header의 배경 컬러를 설정합니다.
   *
   * @default white
   */
  backgroundColor: ColorsType;
}

export type HeaderProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type HeaderStyleProps = Required<Types>;
