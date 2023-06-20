import { useRef, useEffect } from "react";
import "./header.css";

import ChangeAnimationType from "./changeAnimationType";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStick = () => {
      if (window.scrollY > 113) {
        headerRef.current!.classList.remove("unStick");
      } else if (headerRef.current!.classList.contains("stick")) {
        headerRef.current!.classList.add("unStick");
      }
      headerRef.current!.classList.toggle("stick", window.scrollY > 113);
    };

    window.addEventListener("scroll", handleStick);
    return () => window.removeEventListener("scroll", handleStick);
  }, []);

  return (
    <header ref={headerRef}>
      <h1>Scroll.Animate</h1>
      <ChangeAnimationType />
    </header>
  );
};

export default Header;
