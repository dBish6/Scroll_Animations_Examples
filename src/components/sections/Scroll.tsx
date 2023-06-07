import { SectionProps } from "../../@types/SectionProps";

const Scroll = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      <ToAnimate animation={animationType} tag="h2" children="Scroll!" />
      <ToAnimate
        animation={animationType}
        tag="p"
        children="Scrolling is fun and can satisfy your brain with a smooth easy flowing website."
      />
    </>
  );
};

export default Scroll;
