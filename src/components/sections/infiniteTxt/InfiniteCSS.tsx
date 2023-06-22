import { useEffect } from "react";

const InfiniteCSS = ({ direction }: { direction?: "left" | "right" }) => {
  useEffect(() => {
    const scrollerWrapper = document.querySelector(
      ".scrollerWrapper"
    ) as HTMLDivElement;
    direction === "left"
      ? scrollerWrapper.style.setProperty("--dir", "left")
      : document.documentElement.style.setProperty("--dir", "right");
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
