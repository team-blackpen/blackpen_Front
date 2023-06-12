import type { ColorsType } from "shared/styles/globalTheme";

export interface WritingProcessProps {
  step: number;
}

interface PageNumberTypes {
  backgroundColor: ColorsType;
}

export type PageNumberStyleProps = Required<PageNumberTypes>;

interface TrackTypes {
  step: number;
}

export type TrackStyleProps = Required<TrackTypes>;
