import { useLocation } from "react-router-dom";
import styles from "./CommonIndustryLowerSection.module.css";
export default function CommonIndustryLowerSection() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={styles.CommonIndustryLowerSectionContainer}>
      <h1>
        {path === "/finance-page"
          ? "Start Your Secure Electronics Recycling Program Today"
          : "Choose The Right Partner For The Job"}
      </h1>
      <p>
        {path === "/finance-page"
          ? "Protect your company’s sensitive data and meet compliance with a trusted partner who understands the financial services industry’s unique needs. Contact GM Computer Recycle today to schedule a secure, compliant, and environmentally responsible electronics recycling solution tailored for your organization."
          : "Precision in every process – integrity inevery outcome."}
      </p>
    </div>
  );
}
