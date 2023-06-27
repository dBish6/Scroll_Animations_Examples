import { useRef, useState, useEffect } from "react";
import { SectionProps } from "../../../@types/SectionsProps";
import friendImages from "../../../assets/images/bundle";
import ImageCard from "./ImageCard";

const Friends = ({ ToAnimate, animationType }: SectionProps) => {
  const [disableActions, setDisableActions] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && animationType) {
      const ANIMATION_DURATION =
        animationType === "framerMotionUp"
          ? 2138
          : animationType === "framerMotionSide"
          ? 1300
          : 1900;

      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setDisableActions(false);
          }, ANIMATION_DURATION);
        } else {
          setDisableActions(true);
        }
      });
      observer.observe(cardRef.current);

      return () => observer && observer.disconnect();
    }
  }, []);

  return (
    <>
      <ToAnimate animation={animationType} tag="h2" children="Friendly Faces" />
      <ToAnimate animation={animationType} tag="h3" children="Scroll Lovers" />
      <div className="imagesContainer">
        {friendImages.map((obj, i) => {
          return (
            <ImageCard
              ToAnimate={ToAnimate}
              animationType={animationType}
              index={i}
              src={obj.img}
              name={obj.name}
              cardRef={cardRef}
              disableActions={disableActions}
            />
          );
        })}
      </div>
    </>
  );
};

export default Friends;
