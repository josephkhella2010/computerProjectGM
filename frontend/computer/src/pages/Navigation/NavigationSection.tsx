import { useEffect, useState } from "react";
import DesktopNavigation from "./childComponent/DesktopNavigation";
import MobileNavBar from "./childComponent/MobileNavBar";
import styles from "./Navigation.module.css";
export default function NavigationSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={styles.navbarMainWrapper}>
      {isMobile ? (
        <MobileNavBar isScroll={isScroll} setIsScroll={setIsScroll} />
      ) : (
        <DesktopNavigation isScroll={isScroll} />
      )}
    </div>
  );
}
