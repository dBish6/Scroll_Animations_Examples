import { useRef, useState, useLayoutEffect } from "react";
import { SectionProps } from "../../../@types/SectionsProps";
import friendImages from "../../../assets/images/bundle";
import ImageCard from "./ImageCard";

const Friends = ({ ToAnimate, animationType }: SectionProps) => {
  const [disableActions, setDisableActions] = useState(true),
    cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let observer: IntersectionObserver;

    if (cardRef.current && animationType !== "css") {
      const ANIMATION_DURATION = 2138;

      observer = new IntersectionObserver((entries) => {
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
    }
    return () => observer.disconnect();
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
              setDisableActions={
                animationType === "css" ? setDisableActions : undefined
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Friends;
