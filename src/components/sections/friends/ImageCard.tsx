import { createElement } from "react";
import { ImageCardProps } from "../../../@types/SectionProps";
import Tilt from "react-parallax-tilt";

const ImageCard = ({
  ToAnimate,
  animationType,
  index,
  src,
  name,
}: ImageCardProps) => {
  return (
    <Tilt
      tiltMaxAngleX={21}
      tiltMaxAngleY={21}
      scale={1.1}
      perspective={1000}
      transitionSpeed={3500}
      glareEnable={true}
      glareColor={"rgb(130, 88, 195, 0.2)"}
      glarePosition="all"
      glareBorderRadius="6px"
    >
      <ToAnimate
        animation={animationType}
        tag="article"
        options={{
          key: index,
          id: `card${index + 1}`,
          className: "card",
        }}
        children={[
          createElement("h4", null, name),
          createElement("img", {
            src,
            alt: `Friend ${index}`,
          }),
        ]}
      />
    </Tilt>
  );
};

export default ImageCard;
