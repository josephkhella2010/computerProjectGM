import CommonFormSection from "../../../common Component/CommonFormSection";
import styles from "./FinancePage.module.css";
export default function FirstSection() {
  return (
    <div className={styles.governmentPageFirstSectionWrapper}>
      <div className={styles.governmentPageFirstSectionMainContainer}>
        <div className={styles.governmentPageFirstSectionLeftContent}>
          <h1>
            <span> Secure </span>
            Banking & Financial Recycling, Disposal & Data Destruction
          </h1>
          <h4>
            At Precision E-Cycle, we understand the stringent data security and
            regulatory compliance demands of the banking & financial services
            industry.
          </h4>
          <p>
            That’s why our electronics recycling process strictly follows all
            leading industry security and environmental standards — including R2
            (Responsible Recycling), NAID AAA (National Association for
            Information Destruction), e-Stewards, HIPAA, and NIST guidelines —
            to ensure your sensitive data is securely handled and your retired
            electronics are responsibly recycled.
          </p>
        </div>
        <CommonFormSection />
      </div>
    </div>
  );
}
