import { useEffect } from "react";

const useResizeObserver = () => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const cards = document.querySelectorAll(".card");

      // For no animation delay on imageCards on mobile.
      if (window.innerWidth <= 545) {
        cards.forEach((card) => {
          card.removeAttribute("id");
        });
      } else {
        cards.forEach((card, i) => {
          if (!card.id) card.id = `card${i + 1}`;
        });
      }
    });
    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, []);
};

export default useResizeObserver;
