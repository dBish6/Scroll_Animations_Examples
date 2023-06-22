import { InfiniteProps } from "../../../@types/SectionsProps";
import InfiniteCSS from "./InfiniteCSS";
import InfiniteFramer from "./InfiniteFramer";

const index = ({ animationType, infiniteSectionRef }: InfiniteProps) => {
  return (
    <>
      {animationType === "css" ? (
        <>
          <InfiniteCSS direction="left" />
          <InfiniteCSS />
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
