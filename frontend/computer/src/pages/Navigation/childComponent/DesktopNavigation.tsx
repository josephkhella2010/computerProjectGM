import { IoMdArrowDropdown } from "react-icons/io";
import styles from "../Navigation.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  isScroll: boolean;
}

export default function DesktopNavigation({ isScroll }: Props) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className={styles.MainNavBar}>
      <div className={`${styles.navBar} ${isScroll ? styles.scrolled : ""}`}>
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>

        <ul>
          {/* ABOUT US */}
          <div
            className={styles.menuContainerDesktop}
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className={styles.menuContainerDesktopLinkContainer}>
              <li>About</li>
              <IoMdArrowDropdown style={{ color: "#ffffff" }} />
            </div>
            {activeMenu === "about" && (
              <div className={styles.subMenuDesktop}>
                <Link
                  to="/aboutUs"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  About us
                </Link>
                <Link
                  to="/what-we-accept"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  What We Accept
                </Link>
                <Link
                  to="/drop-off"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Drop-Off
                </Link>
                <Link
                  to="/data-destruction"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Data Destruction
                </Link>
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div
            className={styles.menuContainerDesktop}
            onMouseEnter={() => setActiveMenu("services")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className={styles.menuContainerDesktopLinkContainer}>
              <li>Services</li>
              <IoMdArrowDropdown style={{ color: "#ffffff" }} />
            </div>
            {activeMenu === "services" && (
              <div className={styles.subMenuDesktop}>
                <Link
                  to="/computer-recycle-page"
                  className={styles.subMenuDesktopLink}
                  style={{
                    whiteSpace: "normal",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                  onClick={() => setActiveMenu(null)}
                >
                  Computer & Laptop Recycling
                </Link>
                <Link
                  to="/server-recycle-page"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Server Recycling
                </Link>
                <Link
                  to="/destruction-data-service-page"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Data Destruction Service
                </Link>
              </div>
            )}
          </div>

          {/* INDUSTRIES */}
          <div
            className={styles.menuContainerDesktop}
            onMouseEnter={() => setActiveMenu("industries")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className={styles.menuContainerDesktopLinkContainer}>
              <li>Industries</li>
              <IoMdArrowDropdown style={{ color: "#ffffff" }} />
            </div>
            {activeMenu === "industries" && (
              <div className={styles.subMenuDesktop}>
                <Link
                  to="/government-page"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Government
                </Link>
                <Link
                  to="/education-page"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Education
                </Link>
                <Link
                  to="/medical-page"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Medical
                </Link>
                <Link
                  to="/finance-page"
                  className={styles.subMenuDesktopLink}
                  onClick={() => setActiveMenu(null)}
                >
                  Finance
                </Link>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>

          <button className={styles.recycleBtnMobile}>
            <Link to="/recycle" className={styles.recycleBtnMobileLink}>
              Recycle Now
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
}
