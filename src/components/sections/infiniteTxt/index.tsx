import { InfiniteProps } from "../../../@types/SectionsProps";
import InfiniteCSS from "./InfiniteCSS";
import InfiniteFramer from "./InfiniteFramer";

const index = ({ animationType, infiniteSectionRef }: InfiniteProps) => {
  return (
    <>
      {animationType === "cssSide" || animationType === "cssUp" ? (
        <>
          <InfiniteCSS
            direction={animationType === "cssUp" ? "up" : "left"}
            duration={animationType === "cssSide" ? "16s" : "6.35s"}
          />
          <InfiniteCSS
            direction={animationType === "cssUp" ? "down" : "right"}
            duration={animationType === "cssSide" ? "16s" : "6.35s"}
          />
        </>
      ) : (
        <>
          <InfiniteFramer
            animationType={animationType}
            infiniteSectionRef={infiniteSectionRef}
            baseVelocity={200}
          />
          <InfiniteFramer
            animationType={animationType}
            infiniteSectionRef={infiniteSectionRef}
            baseVelocity={-200}
          />
        </>
      )}
    </>
  );
};

export default index;
