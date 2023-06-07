import { useLayoutEffect, useCallback, useEffect } from "react";
import { Variants } from "framer-motion";

const useScrollAnimate = (useKeyFrames: boolean) => {
  useLayoutEffect(() => {
    const handleAnimations = async () => {
      // TODO: Loading useTransition?
      await import("../scroll.css");
      if (useKeyFrames) {
        const observer = new IntersectionObserver(
          (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
              console.log("entry", entry);
              if (entry.isIntersecting) {
                entry.target.classList.add("sAnimate");
              } else {
                entry.target.classList.remove("sAnimate");
              }
            });
          }
        );

        document.querySelectorAll(".toAnimate").forEach((elem) => {
          console.log(elem);
          observer.observe(elem);
        });
      } else {
        const fadeInLeft: Variants = {
          offscreen: {
            opacity: 0,
            x: "-100%",
            rotate: -10,
          },
          onscreen: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        };
        const fadeInRight: Variants = {
          offscreen: {
            opacity: 0,
            x: "100%",
            rotate: -10,
          },
          onscreen: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        };

        document.querySelectorAll(".toAnimate").forEach((elem) => {
          console.log(elem);
          // elem.setAttribute("variants", fadeInLeft);
          elem.setAttribute("initial", "offscreen");
          elem.setAttribute("whileInView", "onscreen");
          elem.setAttribute("viewport", "{once: true}");
        });
      }
    };
    handleAnimations();
  }, []);

  // useEffect(() => {
  //   document.querySelectorAll(".toAnimate").forEach((elem) => {
  //     elem.setAttribute("viewport", window.scrollY.toString());
  //   });
  //   const trackViewport = () => {
  //     document.querySelectorAll(".toAnimate").forEach((elem) => {
  //       elem.setAttribute("viewport", window.scrollY.toString());
  //     });
  //     console.log("window.scrollY", window.scrollY);
  //   };
  //   window.addEventListener("scroll", trackViewport);

  //   return () => {
  //     window.removeEventListener("scroll", trackViewport);
  //   };
  // }, []);
};

export default useScrollAnimate;
