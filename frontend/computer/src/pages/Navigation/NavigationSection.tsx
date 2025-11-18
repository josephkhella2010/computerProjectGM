import { useEffect, useState } from "react";
import DesktopNavigation from "./childComponent/DesktopNavigation";
import MobileNavBar from "./childComponent/MobileNavBar";
import styles from "./Navigation.module.css";
import ContactBar from "../../common Component/ContactBar";
export default function NavigationSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [showContactBar, setShowContactBar] = useState<boolean>(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".appWrapper");

    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 60) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 795) {
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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setShowContactBar(true);
      } else {
        setShowContactBar(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={styles.mainContainerNavBar}>
      <div className={styles.navbarMainWrapper}>
        {showContactBar && <ContactBar />}
        {isMobile ? (
          <MobileNavBar isScroll={isScroll} setIsScroll={setIsScroll} />
        ) : (
          <DesktopNavigation isScroll={isScroll} />
        )}
      </div>
    </div>
  );
}
