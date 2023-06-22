import type { CSSProperties } from "react";

interface TagsTypes {
  tag: string;
  height: CSSProperties["height"];
  padding: CSSProperties["padding"];
}

export type TagsProps = Partial<TagsTypes>;
export type TagsStyleProps = Required<Omit<TagsTypes, "tag">>;
