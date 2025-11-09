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
              Secure data destruction is paramount in today's digital landscape,
              where safeguarding sensitive information is a top priority. Our
              comprehensive data destruction services ensure the complete and
              irreversible removal of data from electronic devices, protecting
              your privacy and confidentiality. Using industry-leading
              techniques and protocols, we guarantee that no traces of your data
              remain, mitigating the risk of unauthorized access or data
              breaches. With our secure data destruction solutions, you can
              trust that your information is handled with the highest level of
              care and attention to detail.
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
              "Drive destruction" encapsulates our commitment to ensuring the
              complete and secure disposal of your hard drives. If you prefer
              witnessing the destruction process firsthand, simply call us to
              schedule an appointment. Alternatively, our associates can place
              your hard drive in our secure drop box for batch destruction,
              guaranteeing the confidentiality and security of your data. Rest
              assured, all data destruction is backed by our guarantee, and we
              take immense pride in maintaining the highest standards of
              security throughout the process.
            </p>
            <p>
              Additionally, if your hard drive holds reuse value, we offer the
              option to wipe it clean free of charge. This ensures that it can
              be refurbished and repurposed for use in another computer,
              promoting sustainability while safeguarding your data privacy.
              Trust us to handle your hard drive destruction needs with
              professionalism, confidentiality, and security.
            </p>
          </div>
        </div>
        <ContactUsLowerSection />
      </div>
    </div>
  );
}
