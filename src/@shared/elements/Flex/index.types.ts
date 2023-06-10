import type { CSSProperties, HTMLAttributes } from "react";

interface Types {
  /**
   * flex의 display 속성을 설정합니다.
   *
   * @default 'flex'
   */
  display: "flex" | "inline-flex";

  /**
   * flex의 flex-direction 속성을 설정합니다.
   *
   * @default 'row'
   */
  direction: CSSProperties["flexDirection"];

  /**
   * flex의 flex-wrap 속성을 설정합니다.
   *
   * @default 'nowrap'
   */
  wrap: CSSProperties["flexWrap"];

  /**
   * flex의 justify-content 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  justifyContent: CSSProperties["justifyContent"];

  /**
   * flex의 align-items 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  alignItems: CSSProperties["alignItems"];

  /**
   * flex의 gap을 설정합니다.
   *
   * @default 0
   */
  gap: number;
}

export type FlexProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type FlexStyleProps = Required<Types>;
