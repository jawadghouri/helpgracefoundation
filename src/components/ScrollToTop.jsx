// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Debug log
    // console.log("Navigated to", pathname);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // can also be 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
