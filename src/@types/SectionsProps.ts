import { ToAnimateProps } from "./ToAnimateProps";

export type SectionProps = {
  ToAnimate: React.FC<ToAnimateProps>;
  animationType: string;
};

export type ImageCardProps = SectionProps & {
  index: number;
  src: string;
  name: string;
  cardRef?: React.RefObject<HTMLDivElement>;
  disableActions?: boolean;
  setDisableActions?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InfiniteProps = {
  animationType: string;
  infiniteSectionRef: React.RefObject<HTMLDivElement>;
};

export type InfiniteFramerProps = InfiniteProps & {
  baseVelocity: number;
};
