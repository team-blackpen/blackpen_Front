import "@emotion/react";
import type { GlobalTheme } from "./globalTheme";

declare module "@emotion/react" {
  export interface Theme extends GlobalTheme {}
}
