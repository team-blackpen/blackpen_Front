import { css } from "@emotion/react";

const texts = {
  headline1: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  `,
  headline2: css`
    font-weight: 500;
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
    line-height: 17px;
  `,
  cpation: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  `,
};

const styles = {
  fullScreen: css`
    position: relative;

    width: 100%;
    min-width: 375px;
    height: 100dvh;
  `,

  smallScreen: css`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    width: 375px;
  `,
};

const medias = {
  sm: "min-width: 420px",
};

const colors = {
  black: "#000",
  white: "#fff",
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
