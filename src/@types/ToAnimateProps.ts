export type ToAnimateProps = {
  animation: string;
  tag: keyof JSX.IntrinsicElements;
  options?: object & {
    role?: string;
    "aria-label"?: string;
    id?: string | number;
    className?: string;
    key?: string | number;
    ref?: React.RefObject<any>;
    setDisableActions?: React.Dispatch<React.SetStateAction<boolean>>;
  };
  children?:
    | string
    | React.ReactElement
    | React.ReactElement[]
    | (string & React.ReactElement)[]
    | React.ReactNode[];
};
