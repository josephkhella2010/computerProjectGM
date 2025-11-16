import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import styles from "./ContactBar.module.css";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
export default function ContactBar() {
  return (
    <div className={styles.ContactBarMainContainer}>
      <div className={styles.ContactBarContainer}>
        <div className={styles.ContactBarContainerLeftSection}>
          <a
            href="https://www.facebook.com/marco.f.hanna.1"
            target="_blank"
            className={styles.ContactBarContainerLeftSectionIconContainer}
          >
            <CiFacebook className={styles.ContactBarContainerLeftSectionIcon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className={styles.ContactBarContainerLeftSectionIconContainer}
          >
            <CiInstagram
              className={styles.ContactBarContainerLeftSectionIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className={styles.ContactBarContainerLeftSectionIconContainer}
          >
            <CiLinkedin className={styles.ContactBarContainerLeftSectionIcon} />
          </a>
        </div>
        <div className={styles.ContactBarContainerMiddleSection}>
          <p>Free Electronics Recycling for Bulk Pickups</p>
        </div>
        <div className={styles.ContactBarContainerRightSection}>
          <li>
            <MdEmail className={styles.ContactBarContainerRightSectionIcon} />
            <a href="mailto:info@gmcomputerrecycle.com">
              {" "}
              info@gmcomputerrecycle.com
            </a>
          </li>
          <li>
            <BsTelephoneFill
              className={styles.ContactBarContainerRightSectionIcon}
            />

            <a href="tel:+15156812487">+15156812487</a>
          </li>
        </div>
      </div>
    </div>
  );
}
