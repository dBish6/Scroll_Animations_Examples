import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const useIntersectionObserverOnCSS = (animationType: string) => {
  const { setIsLoaded, setDisableActions } = useGlobalContext();

  useEffect((): (() => void | undefined) => {
    let observer: IntersectionObserver | undefined;

    if (animationType === "cssSide" || animationType === "cssUp") {
      setIsLoaded((prev) => ({ ...prev, observer: false }));
      const ANIMATION_DURATION = window.innerWidth <= 545 ? 1300 : 2200;
      console.log("ANIMATION_DURATION", ANIMATION_DURATION);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const isCard =
              entry.target.classList.contains("card") &&
              !entry.target.classList.contains("sAnimate");

            if (entry.isIntersecting) {
              entry.target.classList.add("sAnimate");

              if (isCard) {
                setDisableActions(true);
                setTimeout(() => {
                  setDisableActions(false);
                }, ANIMATION_DURATION);
              }
            } else {
              entry.target.classList.remove("sAnimate");
            }
          });
        },
        { threshold: animationType === "cssUp" ? 0.2 : 0 }
      );

      document.querySelectorAll(".toAnimate").forEach((elem) => {
        observer?.observe(elem);
      });
      setIsLoaded((prev) => ({ ...prev, observer: true }));
    } else {
      observer && observer.disconnect();
    }
    return () => observer && observer.disconnect();
  }, [animationType]);
};

export default useIntersectionObserverOnCSS;
