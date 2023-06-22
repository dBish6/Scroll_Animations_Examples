import { InfiniteFramerProps } from "../../../@types/SectionsProps";
import { useRef } from "react";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const InfiniteFramer = ({
  animationType,
  infiniteSectionRef,
  baseVelocity = 100,
}: InfiniteFramerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const baseX = useMotionValue(0), // For framerMotionSide.
    baseY = useMotionValue(0), // For framerMotionUp.
    { scrollY } = useScroll(),
    scrollVelocity = useVelocity(scrollY),
    smoothVelocity = useSpring(scrollVelocity, {
      damping: animationType === "framerMotionUp" ? 300 : 50,
      stiffness: 300,
    }),
    velocityFactor = useTransform(
      smoothVelocity,
      [0, animationType === "framerMotionUp" ? 1500 : 1000],
      [0, 5],
      {
        clamp: false,
      }
    );

  // Ensures that the element remains within the provided 'range'.
  const wrapWithinRange = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  let x, y;
  if (animationType === "framerMotionSide") {
    x = useTransform(baseX, (v) => {
      const containerWidth = containerRef.current?.offsetWidth || 0,
        viewportWidth = window.innerWidth;

      const minX = -containerWidth - 100,
        maxX = viewportWidth + 100;

      return `${wrapWithinRange(minX, maxX, v)}px`;
    });
  } else {
    y = useTransform(baseY, (v) => {
      const sectionHeight = infiniteSectionRef.current?.offsetHeight || 0;

      const minY = -sectionHeight / 2,
        maxY = sectionHeight / 2;

      return `${wrapWithinRange(minY, maxY, v)}px`;
    });
  }

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Changes the direction depending when user is scrolling up or down.
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      animationType === "framerMotionSide"
        ? baseX.set(baseX.get() + moveBy)
        : baseY.set(baseY.get() + moveBy);
    }
  });

  return (
    <m.div className="scroller" ref={containerRef} style={{ x, y }}>
      <h2>
        <span>Scroll Unprecedented</span> | <span>Scroll Unprecedented</span> |{" "}
        <span>Scroll Unprecedented</span> | <span>Scroll Unprecedented</span> |{" "}
        <span>Scroll Unprecedented</span>
      </h2>
    </m.div>
  );
};

export default InfiniteFramer;
