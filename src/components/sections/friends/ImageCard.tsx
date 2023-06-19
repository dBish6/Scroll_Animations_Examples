import { createElement } from "react";
import { ImageCardProps } from "../../../@types/SectionProps";
import Tilt from "react-parallax-tilt";

const ImageCard = ({
  ToAnimate,
  animationType,
  index,
  src,
  name,
  cardRef,
  disableActions,
  setDisableActions,
}: ImageCardProps) => {
  return (
    <Tilt
      key={index}
      tiltMaxAngleX={21}
      tiltMaxAngleY={21}
      scale={1.1}
      perspective={1000}
      transitionSpeed={3500}
      glareEnable={true}
      glareColor={"rgb(130, 88, 195, 0.2)"}
      glarePosition="all"
      glareBorderRadius="6px"
      style={{ pointerEvents: disableActions ? "none" : "initial" }}
    >
      <ToAnimate
        animation={animationType}
        tag="article"
        children={[
          createElement("h4", { key: "friendName" }, name),
          createElement("img", {
            src,
            alt: `Friend ${index}`,
            key: "friendImage",
          }),
        ]}
        options={{
          ...(cardRef && { ref: cardRef }),
          ...(setDisableActions && { setDisableActions }),
          id: `card${index + 1}`,
          className: "card",
        }}
      />
    </Tilt>
  );
};

export default ImageCard;
