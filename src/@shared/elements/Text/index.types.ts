import type { HTMLAttributes } from "react";
import type { ColorsType, TextsType } from "shared/styles/globalTheme";

interface Types {
  /**
   * 폰트 종류를 설정합니다.
   *
   * @default body01
   */
  variant: TextsType;

  /**
   * 폰트 컬러를 설정합니다.
   *
   * @default black
   */
  fontColor: ColorsType;
}

export type TextProps = Partial<Types> & HTMLAttributes<HTMLSpanElement>;
export type TextStyleProps = Required<Types>;
