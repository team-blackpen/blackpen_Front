import { css } from "@emotion/react";

const texts = {
  headline1: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  `,
  headline2: css`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  main: css`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  `,
  subtitle1: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  `,
  subtitle2: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  `,
  body1: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `,
  body2: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  `,
  caption: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  `,
};

const styles = {
  fullWidth: css`
    width: 100%;
    min-width: 375px;
  `,

  smallWidth: css`
    width: 375px;
    left: 50%;
    transform: translateX(-50%);
  `,
};

const medias = {
  sm: "min-width: 420px",
};

const colors = {
  black: "#000",
  white: "#fff",

  gray1: "#f5f5f5",
  gray2: "#e0e0e0",
};

export const theme = {
  texts,
  styles,
  medias,
  colors,
};

export type TextsType = keyof typeof texts;
export type ColorsType = keyof typeof colors;
export type GlobalTheme = typeof theme;
