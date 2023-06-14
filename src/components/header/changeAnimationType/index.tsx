import { useState, useEffect } from "react";

import Popup from "./Popup";

const ChangeAnimationType = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);

  const animationType = localStorage.getItem("animation_type")!;

  return (
    <div>
      <div role="group">
        <button
          className="typeBtn"
          onClick={() => {
            localStorage.setItem("animation_type", "css");
            window.location.reload();
          }}
        >
          CSS Key Frames
        </button>
        {/* <select name="" id="">
          <option value=""></option>
        </select> */}
      </div>
      <div role="group">
        <button className="typeBtn" onClick={() => setIsOpen(!isOpen)}>
          Framer Motion Lib
        </button>
        {isOpen && <Popup animationType={animationType} />}
      </div>
    </div>
  );
};

export default ChangeAnimationType;
