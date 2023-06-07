import useScrollAnimate from "./hooks/useScrollAnimate";

import Sections from "./components/sections";
import Header from "./components/header";

function App() {
  // First Parameter: turns on css keyFrames.
  // Second Parameter: turns on framer-motion.
  // useScrollAnimate(false);

  return (
    <>
      <Header />
      <main>
        <Sections />
      </main>
    </>
  );
}

export default App;
