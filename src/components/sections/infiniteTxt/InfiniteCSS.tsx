import { InfiniteCSSProps } from "../../../@types/SectionsProps";
import { useEffect } from "react";

const InfiniteCSS = ({ direction, duration }: InfiniteCSSProps) => {
  useEffect(() => {
    const scrollerWrapper = document.querySelector(
      ".scrollerWrapper"
    ) as HTMLDivElement;
    if (direction === "left" || direction === "up") {
      document.documentElement.style.setProperty("--dir", direction);
      document.documentElement.style.setProperty("--dur", duration);
    } else {
      scrollerWrapper.style.setProperty("--dir", direction);
      scrollerWrapper.style.setProperty("--dur", duration);
    }
  }, [direction]);

  return (
    <>
      <div className="scrollerWrapper">
        <div className="scroller">
          <h2>
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |
          </h2>
        </div>
        <div className="scroller">
          <h2>
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span> |{" "}
            <span>Scroll Unprecedented</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default InfiniteCSS;
