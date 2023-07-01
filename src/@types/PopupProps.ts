export type PopupProps = {
  animationType: string;
  setAnimationType: React.Dispatch<React.SetStateAction<string>>;
  isClicked: object & {
    css: boolean;
    framer: boolean;
  };
};
