import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Types {
  icon: ReactNode;

  /**
   * icon button의 size를 설정합니다.
   *
   * @default 40
   */
  size?: number;
}

export type IconButtonProps = Types & ButtonHTMLAttributes<HTMLButtonElement>;
export type IconButtonStylesPrpos = Required<Omit<Types, "icon">>;
