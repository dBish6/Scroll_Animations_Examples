import { useState } from "react";

import Popup from "./Popup";

const ChangeAnimationType = () => {
  const [isClicked, setIsClicked] = useState({
    CSSBtn: false,
    framerBtn: false,
    framerSide: false,
    framerUp: false,
  });

  const animationType = localStorage.getItem("animation_type")!,
    disableCSSTypeBtn = isClicked.framerUp || isClicked.framerSide,
    disableFramerTypeBtn =
      isClicked.CSSBtn || isClicked.framerUp || isClicked.framerSide;

  return (
    <div>
      <div role="presentation">
        <button
          className={isClicked.CSSBtn ? "typeBtn loading" : "typeBtn"}
          onClick={() => {
            if (animationType !== "css") {
              setIsClicked((prev) => ({ ...prev, CSSBtn: true }));
              localStorage.setItem("animation_type", "css");
              window.location.reload();
            }
          }}
          disabled={disableCSSTypeBtn}
          aria-disabled={disableCSSTypeBtn}
          style={{
            opacity: disableCSSTypeBtn ? "0.6" : "1",
            cursor: disableCSSTypeBtn ? "not-allowed" : "pointer",
          }}
        >
          {isClicked.CSSBtn ? <div className="spinner" /> : "CSS Key Frames"}
        </button>
      </div>
      <div role="presentation">
        <button
          aria-controls="popup"
          aria-pressed={isClicked.framerBtn}
          className="typeBtn"
          onClick={() =>
            setIsClicked((prev) => ({
              ...prev,
              framerBtn: !isClicked.framerBtn,
            }))
          }
          disabled={disableFramerTypeBtn}
          aria-disabled={disableFramerTypeBtn}
          style={{
            opacity: disableFramerTypeBtn ? "0.6" : "1",
            cursor: disableFramerTypeBtn ? "not-allowed" : "pointer",
          }}
        >
          Framer Motion Lib
        </button>
        {isClicked.framerBtn && !isClicked.CSSBtn && (
          <Popup
            animationType={animationType}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        )}
      </div>
    </div>
  );
};

export default ChangeAnimationType;
