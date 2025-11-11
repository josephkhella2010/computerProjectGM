import CommonFormSection from "../../../common Component/CommonFormSection";
import styles from "./MedicalPage.module.css";
export default function FirstSection() {
  return (
    <div className={styles.governmentPageFirstSectionWrapper}>
      <div className={styles.governmentPageFirstSectionMainContainer}>
        <div className={styles.governmentPageFirstSectionLeftContent}>
          <h1>
            <span> Hospital & Medical Office </span>
            Recycling & Electronic Waste Management
          </h1>
          <p>
            Get fast & efficient pickup of all your outdated or unused
            technology or electronic equipment. Precision ensures that compliant
            and specialized processes are followed to properly handle medical
            EOL (end of life) equipment. This process allows minimal impact to
            environments and hazards.
          </p>
        </div>
        <CommonFormSection />
      </div>
    </div>
  );
}
