import type { ButtonHTMLAttributes } from "react";

interface Types {
  checked: boolean;
}

export type CheckButtonProps = Types & ButtonHTMLAttributes<HTMLButtonElement>;
