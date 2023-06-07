import { ToAnimateProps } from "../@types/ToAnimateProps";
import { useLayoutEffect, useTransition, createElement } from "react";
import { motion, Variants } from "framer-motion";

// TODO: Pending or suspense?
const ToAnimate = ({
  animation,
  tag,
  options,
  children,
}: ToAnimateProps): JSX.Element => {
  const [isPending, startTransition] = useTransition();
  console.log("animation", animation);
  if (animation === "css") {
    useLayoutEffect(() => {
      startTransition(() => {
        import("../scroll.css").then(() => {
          const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
              entries.forEach((entry: IntersectionObserverEntry) => {
                // console.log("entry", entry);
                if (entry.isIntersecting) {
                  entry.target.classList.add("sAnimate");
                } else {
                  entry.target.classList.remove("sAnimate");
                }
              });
            }
          );
          document.querySelectorAll(".toAnimate").forEach((elem) => {
            // console.log(elem);
            observer.observe(elem);
          });
        });
      });
    }, []);

    return isPending ? (
      <div>Loading...</div>
    ) : (
      createElement(
        tag,
        {
          ...options,
          className:
            options && options.className
              ? `toAnimate ${options.className}`
              : "toAnimate",
        },
        children && children
      )
    );
  } else if (
    animation === "framerMotionSide" ||
    animation === "framerMotionUp"
  ) {
    options && console.log("options.id", options.id);
    const fadeInSide: Variants = {
      offscreen: {
        opacity: 0,
        translateX:
          options && options.className === "card"
            ? "-100%"
            : Math.round(Math.random()) % 2 === 0
            ? "-100%"
            : "100%",
        rotate: -10,
      },
      onscreen: {
        opacity: 1,
        translateX: 0,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2,
          delay:
            options &&
            (options.id === "card2"
              ? 0.2
              : options.id === "card3"
              ? 0.4
              : options.id === "card4"
              ? 0.6
              : undefined),
        },
      },
    };

    const fadeInUp: Variants = {};

    // TODO: Up.

    return createElement(
      motion[tag],
      {
        ...options,
        variants: animation === "framerMotionSide" ? fadeInSide : fadeInUp,
        initial: "offscreen",
        whileInView: "onscreen",
        // viewport: { once: true },
      },
      children && children
    );
  } else {
    throw new Error(
      "Error in ToAnimate component; Invalided or missing animation parameter."
    );
  }
};

export default ToAnimate;
