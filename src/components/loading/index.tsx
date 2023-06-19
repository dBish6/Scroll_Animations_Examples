import "./loading.css";

const Loading = () => {
  return (
    <div role="presentation" className="loadingBackdrop">
      <div className="loaderContainer">
        <h4>Loading...</h4>
        <div aria-label="Loading Indicator" className="loader" />
      </div>
    </div>
  );
};

export default Loading;
