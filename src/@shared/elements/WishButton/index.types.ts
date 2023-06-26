import type { CSSProperties, HTMLAttributes } from "react";

interface Types {
  wish: boolean;

  size: number;

  position: CSSProperties["position"];

  top: CSSProperties["top"];

  bottom: CSSProperties["bottom"];

  left: CSSProperties["left"];

  right: CSSProperties["right"];
}

export type WishButtonProps = Partial<Types> &
  HTMLAttributes<HTMLButtonElement>;
export type WishButtonStyleProps = Required<Types>;
