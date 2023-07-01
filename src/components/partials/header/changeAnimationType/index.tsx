import { useRef, useState, useEffect } from "react";
import Popup from "./Popup";
import { useGlobalContext } from "../../../../contexts/GlobalContext";

const ChangeAnimationType = () => {
  const [isClicked, setIsClicked] = useState({
      css: false,
      framer: false,
    }),
    cssTypeBtn = useRef<HTMLButtonElement>(null);

  const { animationType, setAnimationType, isLoaded } = useGlobalContext();

  useEffect(() => {
    return () => setIsClicked({ framer: false, css: false }); // When the content changes to the loading screen.
  }, [isLoaded]);

  return (
    <div>
      <div role="presentation">
        <button
          className="typeBtn"
          ref={cssTypeBtn}
          onClick={() => setIsClicked({ framer: false, css: !isClicked.css })}
        >
          CSS Key Frames
        </button>
        {isClicked.css && !isClicked.framer && (
          <Popup
            animationType={animationType}
            setAnimationType={setAnimationType}
            isClicked={isClicked}
          />
        )}
      </div>
      <div role="presentation">
        <button
          aria-controls="popup"
          aria-pressed={isClicked.framer}
          className="typeBtn"
          onClick={() =>
            setIsClicked({ css: false, framer: !isClicked.framer })
          }
        >
          Framer Motion Lib
        </button>
        {isClicked.framer && !isClicked.css && (
          <Popup
            animationType={animationType}
            setAnimationType={setAnimationType}
            isClicked={isClicked}
          />
        )}
      </div>
    </div>
  );
};

export default ChangeAnimationType;
