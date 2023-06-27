import { ToAnimateProps } from "../@types/ToAnimateProps";
import { m, Variants } from "framer-motion";
import { useGlobalContext } from "../contexts/GlobalContext";

const ToAnimate = ({
  animation,
  tag: Tag,
  options,
  children,
}: ToAnimateProps) => {
  const key = animation; // Used to trigger a re-render of this component when animation changes.

  if (animation === "css") {
    const { isLoaded } = useGlobalContext();

    return (
      <Tag
        key={key}
        {...options}
        className={
          options && options.className
            ? `toAnimate ${options.className}`
            : "toAnimate"
        }
        style={{
          visibility: isLoaded.observer ? "visible" : "hidden",
        }}
      >
        {children}
      </Tag>
    );
  } else if (
    animation === "framerMotionSide" ||
    animation === "framerMotionUp"
  ) {
    const isHeroElement = options && options.id === "heroElem",
      isCard = options && options.id?.toString().includes("card"),
      isSmallElement = options && options.id === "smallElem";

    // prettier-ignore
    const fadeIn: Variants = {
      offscreen: {
        opacity: 0,
        translateX:
          animation === "framerMotionSide"
            ? options && options.className === "card"
              ? "-100%"
              : Math.round(Math.random()) % 2 === 0
              ? "-100%"
              : "100%"
            : 0,
        translateY: animation === "framerMotionUp" ? (isSmallElement ? "150%" : "100%") : 0,
        rotate: animation === "framerMotionUp" ? 0 : -10,
      },
      onscreen: {
        opacity: 1,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        transition: {
          type: "spring",
          damping: animation === "framerMotionSide" ? (isHeroElement ? 50 : 27) : isCard ? 10 : isHeroElement ? 11 : 13,
          mass: animation === "framerMotionSide" ? (isHeroElement ? 8 : 2.15) : isCard ? 1.5 : isHeroElement ? 3.15 : 2.15,
          stiffness: animation === "framerMotionSide" ? (isHeroElement ? 285 : 200) : isCard ? 35 : isHeroElement ? 85 : 70,
          restSpeed: 2,
          restDelta: 0.01,
          delay: options
            ? options.id === "card2"
              ? 0.2
              : options.id === "card3"
              ? 0.4
              : options.id === "card4"
              ? 0.6
              : undefined
            : undefined,
        },
      },
    };

    const MotionTag = (m as any)[Tag];
    return (
      <MotionTag
        key={key}
        variants={fadeIn}
        initial="offscreen"
        whileInView="onscreen"
        {...options}
      >
        {children}
      </MotionTag>
    );
  } else {
    throw new Error(
      "Error in ToAnimate component; Invalided or missing animation parameter."
    );
  }
};

export default ToAnimate;
