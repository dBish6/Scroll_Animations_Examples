import { PopupProps } from "../../../../@types/PopupProps";

const Popup = ({ animationType, setAnimationType }: PopupProps) => {
  return (
    <div aria-label="Select Panel" role="group" id="popup" className="panel">
      <div>
        <h5>Select Type</h5>
      </div>
      <ul aria-label="Variations">
        <li>
          <button
            onClick={() => {
              if (animationType !== "framerMotionSide") {
                localStorage.setItem("animation_type", "framerMotionSide");
                setAnimationType("framerMotionSide");
              }
            }}
          >
            Side
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (animationType !== "framerMotionUp") {
                localStorage.setItem("animation_type", "framerMotionUp");
                setAnimationType("framerMotionUp");
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
