import { PopupProps } from "../../../../@types/PopupProps";

const Popup = ({ animationType, setAnimationType, isClicked }: PopupProps) => {
  return (
    <div
      aria-label="Select Panel"
      role="group"
      id="popup"
      className={
        isClicked.css || isClicked.framer ? "panel animateIn" : "panel"
      }
    >
      <div>
        <h5>Select Type</h5>
      </div>
      <ul aria-label="Variations">
        <li>
          <button
            onClick={() => {
              if (isClicked.framer && animationType !== "framerMotionSide") {
                localStorage.setItem("animation_type", "framerMotionSide");
                setAnimationType("framerMotionSide");
              } else if (isClicked.css && animationType !== "cssSide") {
                localStorage.setItem("animation_type", "cssSide");
                setAnimationType("cssSide");
              }
            }}
          >
            Side
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (isClicked.framer && animationType !== "framerMotionUp") {
                localStorage.setItem("animation_type", "framerMotionUp");
                setAnimationType("framerMotionUp");
              } else if (isClicked.css && animationType !== "cssUp") {
                localStorage.setItem("animation_type", "cssUp");
                setAnimationType("cssUp");
              }
            }}
          >
            Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
