const Popup = ({ animationType }: { animationType: string }) => {
  return (
    <div aria-label="Select Panel" role="group" id="popup" className="panel">
      <div>
        <h5>Select Type</h5>
        <hr />
      </div>
      <ul aria-label="Variations">
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
