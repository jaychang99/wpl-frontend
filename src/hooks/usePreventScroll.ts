import { useEffect } from "react";

// prevent scroll when modal open.
function usePreventScroll() {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "hidden";
    }

    return () => {
      if (html) {
        html.style.overflow = "visible";
      }
    };
  }, []);
}

export default usePreventScroll;
