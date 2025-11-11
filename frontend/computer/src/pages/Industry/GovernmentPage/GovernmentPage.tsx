import CommonAcceptItem from "../../../common Component/CommonAcceptItem";
import CommonIconsSection from "../../../common Component/CommonIconsSection";
import CommonIndustryLowerSection from "../../../common Component/CommonIndustryLowerSection";
import CommonIndustryMiddleSection from "../../../common Component/CommonIndustryMiddleSection";
import FirstSection from "./FirstSection";
import styles from "./GovernmentPage.module.css";
export default function GovernmentPage() {
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
