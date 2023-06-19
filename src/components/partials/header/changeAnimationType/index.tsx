import { useState } from "react";

import Popup from "./Popup";

const ChangeAnimationType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const animationType = localStorage.getItem("animation_type")!;

  return (
    <div>
      <div role="presentation">
        <button
          className="typeBtn"
          onClick={() => {
            if (animationType !== "css") {
              localStorage.setItem("animation_type", "css");
              window.location.reload();
            }
          }}
        >
          CSS Key Frames
        </button>
        {/* <select name="" id="">
          <option value=""></option>
        </select> */}
      </div>
      <div role="presentation">
        <button
          aria-controls="popup"
          aria-pressed={isOpen}
          className="typeBtn"
          onClick={() => setIsOpen(!isOpen)}
        >
          Framer Motion Lib
        </button>
        {isOpen && <Popup animationType={animationType} />}
      </div>
    </div>
  );
};

export default ChangeAnimationType;
