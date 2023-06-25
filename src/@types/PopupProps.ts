export type PopupProps = {
  animationType: string;
  isClicked: object & {
    CSSBtn: boolean;
    framerBtn: boolean;
    framerSide: boolean;
    framerUp: boolean;
  };
  setIsClicked: React.Dispatch<
    React.SetStateAction<{
      CSSBtn: boolean;
      framerBtn: boolean;
      framerSide: boolean;
      framerUp: boolean;
    }>
  >;
};
