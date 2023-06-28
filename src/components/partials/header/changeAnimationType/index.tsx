import { useState, useEffect } from "react";
import Popup from "./Popup";
import { useGlobalContext } from "../../../../contexts/GlobalContext";

const ChangeAnimationType = () => {
  const [isClicked, setIsClicked] = useState({
    css: false,
    framer: false,
  });

  const { animationType, setAnimationType, isLoaded } = useGlobalContext();

  useEffect(() => {
    return () => setIsClicked({ framer: false, css: false }); // When the content changes to the loading screen.
  }, [isLoaded]);

  return (
    <div>
      <div role="presentation">
        <button
          className="typeBtn"
          onClick={() => {
            if (animationType !== "css") {
              setIsClicked({ framer: false, css: true });
              localStorage.setItem("animation_type", "css");
              setAnimationType("css");
            }
          }}
        >
          CSS Key Frames
        </button>
      </div>
      <div role="presentation">
        <button
          aria-controls="popup"
          aria-pressed={isClicked.framer}
          className="typeBtn"
          onClick={() => {
            setIsClicked({ css: false, framer: !isClicked.framer });
          }}
        >
          Framer Motion Lib
        </button>
        {isClicked.framer && (
          <Popup
            animationType={animationType}
            setAnimationType={setAnimationType}
          />
        )}
      </div>
    </div>
  );
};

export default ChangeAnimationType;
