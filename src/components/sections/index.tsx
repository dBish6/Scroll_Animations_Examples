import { useState, useRef, useLayoutEffect } from "react";
import { FeatureBundle } from "framer-motion";
import "./sections.css";

import Loading from "../loading";
import Hero from "./Hero";
import Scroll from "./Scroll";
import KeepScrolling from "./KeepScrolling";
import InfiniteTxt from "./infiniteTxt";
import Friends from "./friends";
import ToAnimate from "../ToAnimate";

/* I used used framer-motion's LazyMotion and m (m is used in ToAnimate.tsx) modules to optimize 
   bundle size. By importing a feature bundle, domAnimation, only the necessary 'web' features are
   included, such as animations, variants, exit animations, and tap/hover/focus gestures. So, by 
   doing this all unnecessary features that comes with just importing the motion module are excluded.
*/

const Sections = () => {
  const [animationType, setAnimationType] = useState(""),
    FramerFeatureBundleRef = useRef<{
      LazyMotion?: React.ElementType;
      domAnimation?: FeatureBundle;
    }>({});

  const typeSetter = (type: string) => {
    setTimeout(() => {
      setAnimationType(type);
    }, 2500);
  };

  // To dynamically import what is needed depending on the animation type.
  useLayoutEffect(() => {
    const loadAnimationType = async () => {
      const storageType = localStorage.getItem("animation_type")
        ? localStorage.getItem("animation_type")!
        : "css";

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

        if (storageType === "framerMotionSide") {
          typeSetter("framerMotionSide");
        } else if (storageType === "framerMotionUp") {
          typeSetter("framerMotionUp");
        } else {
          throw new Error(
            "Invalid animation type was unexpectedly retrieved from local storage!?"
          );
        }
      } else if (storageType === "css") {
        typeSetter("css");
      } else {
        throw new Error(
          "Invalid animation type was unexpectedly retrieved from local storage!?"
        );
      }
    };
    loadAnimationType();
  }, []);

  return (
    <>
      {animationType ? (
        animationType === "css" ? (
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
