import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollContainer() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollArea = document.querySelector(".appWrapper");

    if (scrollArea) {
      scrollArea.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
