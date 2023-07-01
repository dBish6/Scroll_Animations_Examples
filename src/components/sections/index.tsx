import { useRef, useLayoutEffect } from "react";
import { FeatureBundle } from "framer-motion";
import "./sections.css";

import Loading from "../loading";
import Hero from "./Hero";
import Scroll from "./Scroll";
import KeepScrolling from "./KeepScrolling";
import InfiniteTxt from "./infiniteTxt";
import Friends from "./friends";
import ToAnimate from "../ToAnimate";

import { useGlobalContext } from "../../contexts/GlobalContext";
import useIntersectionObserverOnCSS from "../../hooks/useIntersectionObserverOnCSS";
import useResizeObserver from "../../hooks/useResizeObserver";

/* I used used framer-motion's LazyMotion and m (m is used in ToAnimate.tsx) modules to optimize 
   bundle size. By importing a feature bundle, domAnimation, only the necessary 'web' features are
   included, such as animations, variants, exit animations, and tap/hover/focus gestures. So, by 
   doing this all unnecessary features that comes with just importing the motion module are excluded.
*/

const Sections = () => {
  const FramerFeatureBundleRef = useRef<{
    LazyMotion?: React.ElementType;
    domAnimation?: FeatureBundle;
  }>({});

  const { animationType, setAnimationType, isLoaded, setIsLoaded } =
    useGlobalContext();

  // To dynamically import what is needed depending on the animation type and to initialize animationType.
  useLayoutEffect(() => {
    const loadAnimationType = async () => {
      setIsLoaded((prev) => ({ ...prev, animationType: false }));
      const storageType = localStorage.getItem("animation_type")
        ? localStorage.getItem("animation_type")!
        : "cssSide";

      try {
        if (
          storageType === "framerMotionSide" ||
          storageType === "framerMotionUp"
        ) {
          const { LazyMotion, domAnimation } = await import(
            "../../utils/framerImports"
          );
          FramerFeatureBundleRef.current = {
            LazyMotion: LazyMotion,
            domAnimation: domAnimation,
          };

          if (!animationType) {
            if (storageType === "framerMotionSide") {
              setAnimationType("framerMotionSide");
            } else if (storageType === "framerMotionUp") {
              setAnimationType("framerMotionUp");
            } else {
              throw new Error(
                "Invalid animation type was unexpectedly retrieved from local storage!?"
              );
            }
          }
        } else if (storageType === "cssSide" || storageType === "cssUp") {
          await import("../../scroll.css");

          const htmlTagStyle = document.documentElement.style;
          if (
            storageType === "cssSide" &&
            htmlTagStyle.getPropertyValue("--anim") !== "fadeInSide"
          ) {
            htmlTagStyle.setProperty("--anim", "fadeInSide");
            setAnimationType("cssSide");
          } else if (
            storageType === "cssUp" &&
            htmlTagStyle.getPropertyValue("--anim") !== "fadeInUp"
          ) {
            htmlTagStyle.setProperty("--anim", "fadeInUp");
            setAnimationType("cssUp");
          }
        } else {
          throw new Error(
            "Invalid animation type was unexpectedly retrieved from local storage!?"
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoaded((prev) => ({ ...prev, animationType: true }));
        }, 2500);
      }
    };
    loadAnimationType();
  }, [animationType]);

  return (
    <>
      {isLoaded.animationType ? (
        animationType === "cssSide" || animationType === "cssUp" ? (
          <>
            <SectionContent animationType={animationType} />
          </>
        ) : (
          <>
            {FramerFeatureBundleRef.current.LazyMotion && (
              <FramerFeatureBundleRef.current.LazyMotion
                features={FramerFeatureBundleRef.current.domAnimation}
              >
                <SectionContent animationType={animationType} />
              </FramerFeatureBundleRef.current.LazyMotion>
            )}
          </>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

const SectionContent = ({ animationType }: { animationType: string }) => {
  const infiniteSectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserverOnCSS(animationType);
  useResizeObserver();

  return (
    <>
      <section>
        <Hero ToAnimate={ToAnimate} animationType={animationType} />
      </section>
      <section>
        <Scroll ToAnimate={ToAnimate} animationType={animationType} />
      </section>
      <section>
        <KeepScrolling ToAnimate={ToAnimate} animationType={animationType} />
      </section>
      <section ref={infiniteSectionRef}>
        <InfiniteTxt
          animationType={animationType}
          infiniteSectionRef={infiniteSectionRef}
        />
      </section>
      <section>
        <Friends ToAnimate={ToAnimate} animationType={animationType} />
      </section>
    </>
  );
};

export default Sections;
