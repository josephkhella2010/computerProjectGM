import { ToastContainer } from "react-toastify";
import CommonFormSection from "../../../common Component/CommonFormSection";
import ContactUsLowerSection from "../../../common Component/ContactUsLowerSection";
import styles from "./dataDestruction.module.css";
export default function DataDestructionPage() {
  return (
    <div className={styles.DataDestructionPageMainContainer}>
      <ToastContainer />

      <div className={styles.DataDestructionPageContainer}>
        <div className={styles.DataDestructionPageFirstSection}>
          <h1>Hard Drive & Data Destruction</h1>
        </div>
        <div className={styles.DataDestructionPageSecondSection}>
          <div className={styles.DataDestructionPageSecondSectionLeftContent}>
            <h1>Secure Data Destruction</h1>
            <p>
              Protecting sensitive information is an essential part of
              responsible IT asset disposition. GM Computer LLC provides secure
              data sanitization and destruction services for computers, hard
              drives, SSDs, and other data-bearing devices. Our data
              sanitization procedures are aligned with NIST SP 800-88 guidelines
              and are designed to securely remove data from eligible media
              before equipment is reused, remarketed, or recycled. When
              data-bearing media cannot be securely sanitized, physical
              destruction options are available. We provide documented
              processing, asset and serial number tracking, and Certificates of
              Data Destruction when applicable, helping businesses, schools,
              government agencies, and other organizations maintain a clear
              chain of custody for their retired IT assets.
            </p>
            <p>
              Whether you're a business, government agency, or individual
              seeking to dispose of old electronics, our secure data destruction
              services offer a reliable solution to safeguard your sensitive
              information. Contact us today to learn more about how we can help
              you protect your data and maintain the highest standards of
              security and confidentiality.
            </p>
          </div>
          <div className={styles.DataDestructionPageSecondSectionRightContent}>
            <img src="/Foto/dataDesTwo.webp" alt="not found" />
          </div>
        </div>
        <div className={styles.DataDestructionPageThirdSection}>
          <div className={styles.DataDestructionPageThirdSectionLeftContent}>
            <CommonFormSection />
          </div>
          <div className={styles.DataDestructionPageThirdSectionRightContent}>
            <h1>Secure Hard Drive Destruction</h1>
            <p>
              GM Computer LLC provides secure physical destruction options for
              hard drives and other data-bearing media that cannot be reused or
              securely sanitized. Each project can be documented with asset and
              serial number tracking, chain-of-custody records, and a
              Certificate of Data Destruction when applicable. Our goal is to
              provide businesses, schools, government agencies, and other
              organizations with a secure and documented process from collection
              through final disposition.
            </p>
          </div>
        </div>
        <ContactUsLowerSection />
      </div>
    </div>
  );
}
