const Popup = ({ animationType }: { animationType: string }) => {
  return (
    <div
      // role="presentation"
      className="panel"
    >
      <div>
        <h4>Select Type</h4>
        <hr />
      </div>
      <ul>
        <li>
          <button
            onClick={() => {
              if (animationType !== "framerMotionSide") {
                localStorage.setItem("animation_type", "framerMotionSide");
                window.location.reload();
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
                window.location.reload();
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
