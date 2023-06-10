import type { ButtonHTMLAttributes } from "react";
import type { theme } from "shared/styles/globalTheme";

interface Types {
  /**
   * 버튼 타입을 설정합니다.
   * outline으로 설정하면 fontColor는 설정되지 않습니다.
   *
   * @default solid
   */
  variant: "solid" | "outline";

  /**
   * 컬러를 설정합니다.
   *
   * @default black
   */
  color: keyof typeof theme.colors;

  /**
   * 폰트 컬러를 설정합니다.
   *
   * @default white
   */
  fontColor: keyof typeof theme.colors;
}

export type BasicButtonProps = Partial<Types> &
  ButtonHTMLAttributes<HTMLButtonElement>;
export type BasicButtonStyleProps = Required<Types>;
