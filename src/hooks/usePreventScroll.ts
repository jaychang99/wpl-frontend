import { useEffect } from "react";

// prevent scroll when modal open.
function usePreventScroll() {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }

    return () => {
      if (body) {
        body.style.overflow = "visible";
      }
    };
  }, []);
}

export default usePreventScroll;
