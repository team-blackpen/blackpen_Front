import type { HTMLAttributes } from "react";
import type { ColorsType } from "shared/styles/globalTheme";

interface Types {
  /**
   * layout의 배경 컬러를 설정합니다.
   *
   * @default white
   */
  backgroundColor: ColorsType;

  /**
   * layout의 padding 속성을 설정합니다.
   *
   * @default '0 20px'
   */
  padding: string;
}

export type LayoutProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type LayoutStyleProps = Required<Types>;
