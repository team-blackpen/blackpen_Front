import type { Url } from "next/dist/shared/lib/router/router";

interface Types {
  href: Url;
}

export type MainCardItemProps = Types;

interface HeaderTypes {
  title: string;
}

export type MainCardItemHeaderProps = HeaderTypes;
