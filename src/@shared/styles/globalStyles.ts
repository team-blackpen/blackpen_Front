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

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
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
