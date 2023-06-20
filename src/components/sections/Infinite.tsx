import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  animationType: string;
  text: string;
  baseVelocity: number;
}

const Infinite = ({
  animationType,
  text,
  baseVelocity = 100,
}: ParallaxProps) => {
  const containerRef = useRef(null);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  console.log("window.innerWidth", -window.innerWidth);

  const x = useTransform(baseX, (v) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const viewportWidth = window.innerWidth;

    const minX = -containerWidth - 100;
    const maxX = viewportWidth + 100;

    return `${wrap(minX, maxX, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <motion.div className="scroller" ref={containerRef} style={{ x }}>
      <h2>
        <span>{text}</span> | <span>{text}</span> | <span>{text}</span> |{" "}
        <span>{text}</span> | <span>{text}</span>
      </h2>
    </motion.div>
  );
};

export default Infinite;
