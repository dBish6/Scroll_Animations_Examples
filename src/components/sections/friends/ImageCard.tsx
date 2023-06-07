import { ImageCardProps } from "../../../@types/SectionProps";
import { createElement } from "react";

const ImageCard = ({
  ToAnimate,
  animationType,
  index,
  src,
  name,
}: ImageCardProps) => {
  console.log("key", index);
  return (
    <ToAnimate
      animation={animationType}
      tag="article"
      options={{ key: index, id: `card${index}`, className: "card" }}
      children={[
        createElement("h4", null, name),
        createElement("img", { src, alt: `Friend ${index}` }),
      ]}
    />
  );
};

export default ImageCard;
