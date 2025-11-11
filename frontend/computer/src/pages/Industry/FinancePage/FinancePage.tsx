import CommonAcceptItem from "../../../common Component/CommonAcceptItem";
import CommonIconsSection from "../../../common Component/CommonIconsSection";
import CommonIndustryLowerSection from "../../../common Component/CommonIndustryLowerSection";
import CommonIndustryMiddleSection from "../../../common Component/CommonIndustryMiddleSection";
import styles from "./FinancePage.module.css";
import FirstSection from "./FirstSection";

export default function FinancePage() {
  return (
    <div className={styles.governmentPageMainConatainer}>
      <FirstSection />
      <CommonIconsSection />
      <CommonIndustryMiddleSection />
      <CommonAcceptItem />
      <CommonIndustryLowerSection />
    </div>
  );
}
