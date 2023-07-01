import { InfiniteProps } from "../../../@types/SectionsProps";
import InfiniteCSS from "./InfiniteCSS";
import InfiniteFramer from "./InfiniteFramer";

const index = ({ animationType, infiniteSectionRef }: InfiniteProps) => {
  return (
    <>
      {animationType === "cssSide" || animationType === "cssUp" ? (
        <>
          <InfiniteCSS direction="left" />
          <InfiniteCSS direction="right" />
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
