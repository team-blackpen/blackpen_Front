import { css } from "@emotion/react";
import { pretendard } from "shared/utils/fonts";

export default css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  img {
    -webkit-user-drag: none;
  }

  html {
    font-family: ${pretendard.style.fontFamily};
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  input,
  textarea {
    outline: none;
    border: 0;
  }

  li {
    list-style: none;
  }
`;
