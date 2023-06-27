export type ToAnimateProps = {
  animation: string;
  tag: keyof JSX.IntrinsicElements;
  options?: object & {
    role?: string;
    "aria-label"?: string;
    id?: string;
    className?: string;
    key?: string | number;
    ref?: React.RefObject<any>;
  };
  children?:
    | string
    | React.ReactElement
    | React.ReactElement[]
    | (string & React.ReactElement)[]
    | React.ReactNode[];
};
