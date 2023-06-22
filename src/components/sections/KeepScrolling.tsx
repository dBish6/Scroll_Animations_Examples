import { createElement } from "react";
import { SectionProps } from "../../@types/SectionsProps";

const KeepScrolling = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      {animationType === "framerMotionUp" ? (
        <>
          <ToAnimate
            animation={animationType}
            tag="div"
            children={[
              createElement("h2", { key: "keepScroll" }, "Keep Scrolling!"),
              createElement(
                "p",
                { key: "scrollRhythm" },
                "You're almost there just enjoy the rhythm of scrolling."
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
      )}
    </>
  );
};

export default KeepScrolling;
