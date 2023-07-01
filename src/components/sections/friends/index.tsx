import { useRef, useEffect } from "react";
import { SectionProps } from "../../../@types/SectionsProps";
import friendImages from "../../../assets/images/bundle";
import ImageCard from "./ImageCard";
import { useGlobalContext } from "../../../contexts/GlobalContext";

const Friends = ({ ToAnimate, animationType }: SectionProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { disableActions, setDisableActions } = useGlobalContext();

  // To disable pointer events on the imageCard when animating in because of the tilt effect. The IntersectionObserver
  // on CSS does the same thing; I tried to use only one IntersectionObserver per animation type.
  useEffect(() => {
    if (
      cardRef.current &&
      (animationType === "framerMotionSide" ||
        animationType === "framerMotionUp")
    ) {
      const ANIMATION_DURATION =
        animationType === "framerMotionUp" ? 2138 : 1300;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDisableActions(true);
            setTimeout(() => {
              setDisableActions(false);
            }, ANIMATION_DURATION);
          }
        });
      });
      document.querySelectorAll(".card").forEach((elem) => {
        observer.observe(elem);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <ToAnimate animation={animationType} tag="h2" children="Friendly Faces" />
      <ToAnimate animation={animationType} tag="h3" children="Scroll Lovers" />
      <div className="imagesContainer" ref={cardRef}>
        {friendImages.map((obj, i) => {
          return (
            <ImageCard
              ToAnimate={ToAnimate}
              animationType={animationType}
              index={i}
              src={obj.img}
              name={obj.name}
              disableActions={disableActions}
            />
          );
        })}
      </div>
    </>
  );
};

export default Friends;
