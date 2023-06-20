import { useRef, useEffect } from "react";

import "./scroll_Indicator.css";

const ScrollIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDisplay = () => {
      if (window.scrollY > 113) {
        indicatorRef.current!.classList.add("disappear");
        setTimeout(() => {
          indicatorRef.current!.remove();
          window.removeEventListener("scroll", handleDisplay);
        }, 500); // Animation Duration
      }
    };

    window.addEventListener("scroll", handleDisplay);
    return () => window.removeEventListener("scroll", handleDisplay);
  }, []);

  return (
    <div aria-label="Scroll Indicator" className="indicator" ref={indicatorRef}>
      <h4>Start Scrolling!</h4>
      <div className="arrowContainer left">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="arrowContainer right">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
