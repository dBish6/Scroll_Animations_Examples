import { createElement } from "react";
import { SectionProps } from "../../@types/SectionsProps";

const Scroll = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      {animationType === "framerMotionUp" ? (
        <>
          <ToAnimate
            animation={animationType}
            tag="div"
            children={[
              createElement("h2", { key: "Scroll!" }, "Scroll!"),
              createElement(
                "p",
                { key: "Scroll!Txt" },
                "Scrolling is fun and can satisfy your brain with a smooth easy flowing website."
              ),
            ]}
            options={{
              role: "presentation",
              id: "smallElem",
            }}
          />
        </>
      ) : (
        <>
          <ToAnimate animation={animationType} tag="h2" children="Scroll!" />
          <ToAnimate
            animation={animationType}
            tag="p"
            children="Scrolling is fun and can satisfy your brain with a smooth easy flowing website."
          />
        </>
      )}
    </>
  );
};

export default Scroll;
