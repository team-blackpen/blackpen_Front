import type { CSSProperties, HTMLAttributes } from "react";

interface Types {
  /**
   * grid의 template-columns 속성을 설정합니다.
   *
   * @default 'repeat(2, 1fr)'
   */
  templateColumns: CSSProperties["gridTemplateColumns"];

  /**
   * grid의 template-rows 속성을 설정합니다.
   *
   * @default 'none'
   */
  templateRows: CSSProperties["gridTemplateRows"];

  /**
   * grid의 justify-content 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  justifyContent: CSSProperties["justifyContent"];

  /**
   * grid의 align-items 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  alignItems: CSSProperties["alignItems"];

  /**
   * grid의 align-content 속성을 설정합니다.
   *
   * @default 'start'
   */
  alignContent: CSSProperties["alignContent"];

  /**
   * grid의 gap을 설정합니다.
   *
   * @default 0
   */
  gap: number;

  /**
   * grid의 column-gap을 설정합니다.
   *
   * @default 0
   */
  columnGap: number;

  /**
   * grid의 row-gap을 설정합니다.
   *
   * @default 0
   */
  rowGap: number;
}

export type GridProps = Partial<Types> & HTMLAttributes<HTMLDivElement>;
export type GridStyleProps = Required<Types>;
