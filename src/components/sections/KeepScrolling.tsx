import { SectionProps } from "../../@types/SectionProps";

const KeepScrolling = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      <ToAnimate
        animation={animationType}
        tag="h2"
        children="Keep Scrolling!"
      />
      <ToAnimate
        animation={animationType}
        tag="p"
        children="You're almost there just enjoy the rhythm of scrolling."
      />
    </>
  );
};

export default KeepScrolling;
