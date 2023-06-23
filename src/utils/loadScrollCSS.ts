// I had to do this because GitHub pages doesn't like dynamically importing CSS directly...
const loadScrollCSS = () => {
  return import("../scroll.css");
};

export default loadScrollCSS;
