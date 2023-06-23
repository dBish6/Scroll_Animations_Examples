import { useLayoutEffect, useTransition, createElement } from "react";
import { ToAnimateProps } from "../@types/ToAnimateProps";
import { m, Variants } from "framer-motion";
import loadScrollCSS from "../utils/loadScrollCSS";

const ToAnimate = ({ animation, tag, options, children }: ToAnimateProps) => {
  const [isPending, startTransition] = useTransition();
  // console.log("animation", animation);

  if (animation === "css") {
    useLayoutEffect(() => {
      let observer: IntersectionObserver;

      startTransition(() => {
        loadScrollCSS();
        observer = new IntersectionObserver((entries) => {
          console.log("STARTED");
          entries.forEach((entry) => {
            const isCardOptions =
              entry.target.classList.contains("card") &&
              options &&
              options.setDisableActions;

            if (entry.isIntersecting) {
              console.log("WHY");
              entry.target.classList.add("sAnimate");
              if (isCardOptions) {
                setTimeout(() => {
                  options.setDisableActions!(false); // To enable the action on the ImageCard.
                }, 1900); // Keyframes duration with delay.
              }
            } else {
              entry.target.classList.remove("sAnimate");
              if (isCardOptions) options.setDisableActions!(true);
            }
          });

          document.querySelectorAll(".toAnimate").forEach((elem) => {
            observer.observe(elem);
          });
        });
      });
      return () => observer.disconnect();
    }, []);

    if (!isPending)
      return createElement(
        tag,
        {
          ...options,
          className:
            options && options.className
              ? `toAnimate ${options.className}`
              : "toAnimate",
        },
        children
      );
    return null;
  } else if (
    animation === "framerMotionSide" ||
    animation === "framerMotionUp"
  ) {
    // options && console.log("options.id", options.id);
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

    return createElement(
      (m as any)[tag],
      {
        ...options,
        "aria-label": "Test",
        variants: fadeIn,
        initial: "offscreen",
        whileInView: "onscreen",
        // viewport: { once: true },
      },
      children
    );
  } else {
    throw new Error(
      "Error in ToAnimate component; Invalided or missing animation parameter."
    );
  }
};

export default ToAnimate;
