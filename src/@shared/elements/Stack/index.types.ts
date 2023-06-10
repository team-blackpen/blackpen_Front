import type { CSSProperties, HTMLAttributes } from "react";

interface Types {
  /**
   * stack의 flex-direction 속성을 설정합니다.
   *
   * @default 'column'
   */
  direction: CSSProperties["flexDirection"];

  /**
   * stack의 gap을 설정합니다.
   *
   * @default 0
   */
  gap: number;
}

export type StackProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type StackStyleProps = Required<Types>;
