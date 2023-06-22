import type { CSSProperties, HTMLAttributes } from "react";
import type { ColorsType } from "shared/styles/globalTheme";

interface Types {
  /**
   * bottom의 배경 컬러를 설정합니다.
   *
   * @default white
   */
  backgroundColor: ColorsType;

  /**
   * bottom의 height를 설정합니다.
   *
   * @default 86px
   */
  height: CSSProperties["height"];
}

export type BottomProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type BottomStyleProps = Required<Types>;
