import { SectionProps } from "../../@types/SectionsProps";
import { createElement } from "react";

import ScrollIndicator from "../scroll_Indicator";

const Hero = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      {animationType === "framerMotionUp" || animationType === "cssUp" ? (
        <>
          <ToAnimate
            animation={animationType}
            tag="div"
            children={[
              createElement("div", { key: "Title" }, [
                createElement("h2", { key: "Welcome" }, "Welcome to Some"),
                createElement("h2", { key: "Scroll" }, "Scrolling Fun"),
              ]),
              createElement(
                "p",
                { key: "WelcomeTxt" },
                "Experience the magic of scroll animations and bring your website to life! Just use the buttons on the top of the screen to experiment with what animation method that you want to use. 😄"
              ),
            ]}
            options={{ className: "heroContainer", id: "heroElem" }}
          />
        </>
      ) : (
        <>
          <ToAnimate
            animation={animationType}
            tag="div"
            children={[
              createElement("h2", { key: "Welcome" }, "Welcome to Some"),
              createElement("h2", { key: "Scroll" }, "Scrolling Fun"),
            ]}
            options={{ id: "heroElem" }}
          />
          <ToAnimate
            animation={animationType}
            tag="p"
            children="Experience the magic of scroll animations and bring your website to life! Just use the buttons on the top of the screen to experiment with what animation method that you want to use. 😄"
            options={{ id: "heroElem" }}
          />
        </>
      )}

      <ScrollIndicator />
    </>
  );
};

export default Hero;
