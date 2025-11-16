/* import { useEffect, useState } from "react";
import styles from "../Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
interface Props {
  isScroll: boolean;
  setIsScroll: (isScroll: boolean) => void;
}
export default function MobileNavBar({ isScroll, setIsScroll }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const addClassActive = showMenu ? styles.active : "";
  const addClassShow = showMenu ? styles.show : "";
  const navigate = useNavigate();
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      setIsScroll(false);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu, setIsScroll]);

  return (
    <div className={styles.MainNavBar}>
      <div
        className={`${styles.mobileNavBar} ${isScroll ? styles.scrolled : ""}`}
      >
        <img src="/logo.svg" alt="not Found" onClick={() => navigate("/")} />
        <div
          className={`${styles.hamMenu} ${addClassActive}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line} `}></div>
        </div>
        <div
          className={`${styles.mobileOverLay} ${addClassShow} `}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.sideMenu} `}
          >
            <div
              className={styles.backDiv}
              onClick={() => {
                setShowMenu(false);
                setIsScroll(true);
              }}
            >
              <BiArrowBack className={styles.backIcon} />
              <p>Back</p>
            </div>
            <ul>
              <li onClick={() => setShowMenu(false)}>
                <Link to="/aboutUs">About us</Link>
              </li>

              <li onClick={() => setShowMenu(false)}>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <button
                onClick={() => setShowMenu(false)}
                className={styles.recycleBtnMobile}
              >
                <Link to="/recycle" className={styles.recycleBtnMobileLink}>
                  Recycle Now
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
 */
import { useEffect, useRef, useState } from "react";
import styles from "../Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  isScroll: boolean;
  setIsScroll: (isScroll: boolean) => void;
}

const menuArr = [
  {
    mainLink: "About",
    subMenuLink: [
      { name: "About us", path: "/aboutUs" },
      { name: "What We Accept", path: "/what-we-accept" },
      { name: "Drop-Off", path: "/drop-off" },
      { name: "Data Destruction", path: "/data-destruction" },
    ],
  },
  {
    mainLink: "Services",
    subMenuLink: [
      { name: "Computer & Laptop Recycling", path: "/computer-recycle-page" },
      { name: "Server Recycling", path: "/server-recycle-page" },
      {
        name: "Data Destruction Service",
        path: "/destruction-data-service-page",
      },
    ],
  },
  {
    mainLink: "Industries",
    subMenuLink: [
      { name: "Government", path: "/government-page" },
      { name: "Education", path: "/education-page" },
      { name: "Medical", path: "/medical-page" },
      { name: "Finance", path: "/finance-page" },
    ],
  },
];

export default function MobileNavBar({ isScroll, setIsScroll }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<boolean[]>(
    Array(menuArr.length).fill(false)
  );
  const [containerHeights, setContainerHeights] = useState<number[]>(
    Array(menuArr.length).fill(0)
  );
  const subMenuRef = useRef<Array<HTMLDivElement | null>>([]);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const addClassActive = showMenu ? styles.active : "";
  const addClassShow = showMenu ? styles.show : "";
  const navigate = useNavigate();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      setIsScroll(false);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu, setIsScroll]);

  useEffect(() => {
    const handleResize = () => {
      const heights = subMenuRef.current.map(
        (el) =>
          el?.querySelector(`.${styles.mobileMainSubmenuLowerSection}`)
            ?.scrollHeight || 0
      );
      setContainerHeights(heights);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showSubMenu]);

  const toggleSubMenu = (index: number) => {
    setShowSubMenu((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const closeSubMenu = () => {
    setShowSubMenu(Array(menuArr.length).fill(false));
  };

  const adjustSidebarHeight = () => {
    if (!sideBarRef.current) return;

    const contentHeight = sideBarRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (contentHeight < viewportHeight) {
      sideBarRef.current.style.height = `${contentHeight}px`;
      sideBarRef.current.style.overflowY = "hidden";
    } else {
      sideBarRef.current.style.height = "100dvh";
      sideBarRef.current.style.overflowY = "auto";
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowSubMenu(Array(menuArr.length).fill(false));
    if (sideBarRef.current) {
      sideBarRef.current.style.height = "auto";
      sideBarRef.current.style.overflowY = "hidden";
    }
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (showMenu) {
      adjustSidebarHeight();
    }
  }, [showMenu, showSubMenu]);

  useEffect(() => {
    window.addEventListener("resize", adjustSidebarHeight);
    return () => window.removeEventListener("resize", adjustSidebarHeight);
  }, []);

  return (
    <div className={styles.MainNavBar}>
      <div
        className={`${styles.mobileNavBar} ${isScroll ? styles.scrolled : ""}`}
      >
        <img src="/logo.svg" alt="not Found" onClick={() => navigate("/")} />
        <div
          className={`${styles.hamMenu} ${addClassActive}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <div
          className={`${styles.mobileOverLay} ${addClassShow}`}
          onClick={() => setShowMenu(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.sideMenu}
            ref={sideBarRef}
          >
            <div
              className={styles.backDiv}
              onClick={() => {
                setShowMenu(false);
                setIsScroll(true);
                closeMenu();
              }}
            >
              <BiArrowBack className={styles.backIcon} />
              <p>Back</p>
            </div>

            <ul className={styles.MenuMobileMainContainer}>
              <div className={styles.subMenuMobileMainContainer}>
                <div className={styles.mobileMainSubmenuConatainer}>
                  {menuArr.map((item, index) => (
                    <div
                      className={styles.mobileMainSubmenuSection}
                      key={index}
                      ref={(el) => {
                        subMenuRef.current[index] = el;
                      }}
                    >
                      <div
                        className={styles.mobileMainSubmenuSectionHeader}
                        onClick={() => toggleSubMenu(index)}
                      >
                        <li>{item.mainLink}</li>
                        <IoMdArrowDropdown
                          style={{
                            color: "#ffffff",
                            transform: showSubMenu[index]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>

                      <div
                        className={styles.mobileMainSubmenuLowerSection}
                        style={{
                          maxHeight: showSubMenu[index]
                            ? `${containerHeights[index]}px`
                            : "0px",
                          overflow: "hidden",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                        <ul className={styles.subMenuMobileMainMenu}>
                          {item.subMenuLink.map((it, i) => (
                            <li
                              key={i}
                              className={styles.subMenuMobileMainLink}
                            >
                              <Link
                                to={it.path}
                                className={styles.subMenuMobileLink}
                                onClick={() => {
                                  setShowMenu(false), closeSubMenu();
                                }}
                              >
                                {it.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                  <li
                    onClick={() => setShowMenu(false)}
                    className={styles.linksContainer}
                  >
                    <Link to="/contactUs" className={styles.links}>
                      Contact Us
                    </Link>
                  </li>
                  <button
                    onClick={() => setShowMenu(false)}
                    className={styles.recycleBtnMobile}
                  >
                    <Link to="/recycle" className={styles.recycleBtnMobileLink}>
                      Recycle Now
                    </Link>
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
