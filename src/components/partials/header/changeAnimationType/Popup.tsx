import { PopupProps } from "../../../../@types/PopupProps";

const Popup = ({ animationType, isClicked, setIsClicked }: PopupProps) => {
  return (
    <div aria-label="Select Panel" role="group" id="popup" className="panel">
      <div>
        <h5>Select Type</h5>
      </div>
      <ul aria-label="Variations">
        <li>
          <button
            className={isClicked.framerSide ? "loading" : undefined}
            onClick={() => {
              if (animationType !== "framerMotionSide") {
                setIsClicked((prev) => ({ ...prev, framerSide: true }));
                localStorage.setItem("animation_type", "framerMotionSide");
                window.location.reload();
              }
            }}
            disabled={isClicked.framerUp}
            aria-disabled={isClicked.framerUp}
            style={{
              opacity: isClicked.framerUp ? "0.6" : "1",
              cursor: isClicked.framerUp ? "not-allowed" : "pointer",
            }}
          >
            {isClicked.framerSide ? <div className="spinner" /> : "Side"}
          </button>
        </li>
        <li>
          <button
            className={isClicked.framerUp ? "loading" : undefined}
            onClick={() => {
              if (animationType !== "framerMotionUp") {
                setIsClicked((prev) => ({ ...prev, framerUp: true }));
                localStorage.setItem("animation_type", "framerMotionUp");
                window.location.reload();
              }
            }}
            disabled={isClicked.framerSide}
            aria-disabled={isClicked.framerSide}
            style={{
              opacity: isClicked.framerSide ? "0.4" : "1",
              cursor: isClicked.framerSide ? "not-allowed" : "pointer",
            }}
          >
            {isClicked.framerUp ? <div className="spinner" /> : "Up"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
