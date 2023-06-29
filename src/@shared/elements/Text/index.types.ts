import type { CSSProperties, HTMLAttributes } from "react";
import type { ColorsType, TextsType } from "shared/styles/globalTheme";

interface Types {
  /**
   * 폰트 종류를 설정합니다.
   *
   * @default body01
   */
  variant: TextsType;

  /**
   * 폰트 display를 설정합니다.
   *
   * @default block
   */
  display: "block" | "flex";

  /**
   * 폰트 컬러를 설정합니다.
   *
   * @default black
   */
  fontColor: ColorsType;

  /**
   * text box의 width를 설정합니다.
   *
   * @default fit-content
   */
  width: CSSProperties["width"];

  /**
   * text box의 align를 설정합니다.
   *
   * @default left
   */
  textAlign: CSSProperties["textAlign"];

  /**
   * text box의 말줄임표를 설정합니다.
   *
   * @default false
   */
  truncate: boolean;
}

export type TextProps = Partial<Types> & HTMLAttributes<HTMLSpanElement>;
export type TextStyleProps = Required<Types>;
