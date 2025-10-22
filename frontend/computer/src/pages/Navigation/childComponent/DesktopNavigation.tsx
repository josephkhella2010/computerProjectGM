import styles from "../Navigation.module.css";
import { Link } from "react-router-dom";
interface Props {
  isScroll: boolean;
}
export default function DesktopNavigation({ isScroll }: Props) {
  return (
    <div className={`${styles.MainNavBar}`}>
      <div className={`${styles.navBar} ${isScroll ? styles.scrolled : ""}`}>
        <Link to="/">
          <img src="/logo.svg" alt="not Found" />
        </Link>
        <ul>
          <li>
            <Link to="/aboutUs">About us</Link>
          </li>

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
