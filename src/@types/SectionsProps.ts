import { ToAnimateProps } from "./ToAnimateProps";

export type SectionProps = {
  ToAnimate: React.FC<ToAnimateProps>;
  animationType: string;
};

export type InfiniteProps = {
  animationType: string;
  infiniteSectionRef: React.RefObject<HTMLDivElement>;
};

export type InfiniteFramerProps = InfiniteProps & {
  baseVelocity: number;
};

export type ImageCardProps = SectionProps & {
  index: number;
  src: string;
  name: string;
  disableActions: boolean;
};
