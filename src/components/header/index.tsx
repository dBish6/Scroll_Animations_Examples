import { useEffect } from "react";
import "./header.css";

import ChangeAnimationType from "./changeAnimationType";

const Header = () => {
  const handleScroll = () => {
    const header = document.querySelector("header") as Element;
    header.classList.toggle("stick", window.scrollY > 552); // 112
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <h1>Scroll.Animate</h1>
      <ChangeAnimationType />
    </header>
  );
};

export default Header;
