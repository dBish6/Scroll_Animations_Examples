import { createElement } from "react";
import "./sections.css";

import Hero from "./Hero";
import Scroll from "./Scroll";
import KeepScrolling from "./KeepScrolling";
import Friends from "./friends";
import ToAnimate from "../ToAnimate";

const Sections = () => {
  const animationType = localStorage.getItem("animation_type")
    ? localStorage.getItem("animation_type")!
    : "css";

  return (
    <>
      <section>
        <Hero ToAnimate={ToAnimate} animationType={animationType} />
      </section>
      <section>
        <Scroll ToAnimate={ToAnimate} animationType={animationType} />
      </section>
      <section>
        <KeepScrolling ToAnimate={ToAnimate} animationType={animationType} />
      </section>
      <section>
        <Friends ToAnimate={ToAnimate} animationType={animationType} />
      </section>
    </>
  );
};

export default Sections;
