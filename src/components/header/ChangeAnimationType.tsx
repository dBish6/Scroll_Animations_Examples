import { useState, useEffect } from "react";

const ChangeAnimationType = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);

  const animationType = localStorage.getItem("animation_type");

  return (
    <div>
      <div role="group">
        <button
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
        <button
          onClick={() => {
            if (animationType !== "framerMotionSide") {
              localStorage.setItem("animation_type", "framerMotionSide");
              window.location.reload();
            }
            setIsOpen(true);
          }}
        >
          Framer Motion Lib
        </button>
        {(isOpen || animationType?.includes("framerMotion")) && (
          <select name="" id="">
            <option
              value="slide"
              onClick={() => {
                if (animationType !== "framerMotionSide") {
                  localStorage.setItem("animation_type", "framerMotionSide");
                  window.location.reload();
                }
              }}
            >
              Side
            </option>
            <option
              value="up"
              onClick={() => {
                if (animationType !== "framerMotionUp") {
                  localStorage.setItem("animation_type", "framerMotionUp");
                  window.location.reload();
                }
              }}
            >
              Up
            </option>
          </select>
        )}
      </div>
    </div>
  );
};

export default ChangeAnimationType;
