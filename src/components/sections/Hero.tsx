import { SectionProps } from "../../@types/SectionProps";
import { createElement } from "react";

const Hero = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      <ToAnimate
        animation={animationType}
        tag="div"
        children={[
          createElement("h2", null, "Welcome to Some"),
          createElement("h2", null, "Scrolling Fun"),
        ]}
        options={{ id: "heroElm" }}
      />
      <ToAnimate
        animation={animationType}
        tag="p"
        children="Experience the magic of scroll animations and bring your website to life! Just use the buttons on the top of the screen to experiment with what animation method that you want to use. 😄"
        options={{ id: "heroElm" }}
      />
      <ToAnimate
        animation={animationType}
        tag="img"
        options={{ id: "heroElm" }}
      />
    </>
  );
};

export default Hero;
