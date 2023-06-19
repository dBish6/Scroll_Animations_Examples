import { useEffect } from "react";
import "./header.css";

import ChangeAnimationType from "./changeAnimationType";

const Header = () => {
  const handleScroll = () => {
    const header = document.querySelector("header") as Element;
    header.classList.toggle("stick", window.scrollY > 113); // 552
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // TODO: Hide if they want to.

  return (
    <header>
      <h1>Scroll.Animate</h1>
      <ChangeAnimationType />
    </header>
  );
};

export default Header;
