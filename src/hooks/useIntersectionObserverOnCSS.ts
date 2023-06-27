import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const useIntersectionObserverOnCSS = (animationType: string) => {
  const { setIsLoaded } = useGlobalContext();

  useEffect((): (() => void | undefined) => {
    let observer: IntersectionObserver | undefined;

    if (animationType === "css") {
      setIsLoaded((prev) => ({ ...prev, observer: false }));
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sAnimate");
          } else {
            entry.target.classList.remove("sAnimate");
          }
        });
      });

      document.querySelectorAll(".toAnimate").forEach((elem) => {
        observer?.observe(elem);
      });
      setTimeout(() => {
        setIsLoaded((prev) => ({ ...prev, observer: true }));
      }, 135); // This is to help with the annoying flash of the element being fixed before it animates in.
    } else {
      observer && observer.disconnect();
    }
    return () => observer && observer.disconnect();
  }, [animationType]);
};

export default useIntersectionObserverOnCSS;
