import { HTMLMotionProps } from "framer-motion";

export type ToAnimateProps = {
  animation: string;
  tag: keyof JSX.IntrinsicElements | keyof HTMLMotionProps<"div">;
  options?: object & {
    id?: string | number;
    className?: string;
    key?: string | number;
  };
  children?:
    | string
    | React.ReactElement
    | React.ReactElement[]
    | (string & React.ReactElement)[]
    | React.ReactNode[];
};
