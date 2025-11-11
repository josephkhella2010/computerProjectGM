import CommonAcceptItem from "../../../common Component/CommonAcceptItem";
import CommonIconsSection from "../../../common Component/CommonIconsSection";
import CommonIndustryLowerSection from "../../../common Component/CommonIndustryLowerSection";
import CommonIndustryMiddleSection from "../../../common Component/CommonIndustryMiddleSection";
import FirstSection from "./FirstSection";
import styles from "./MedicalPage.module.css";

export default function MedicalPage() {
  return (
    <div className={styles.medicalPageMainConatainer}>
      <FirstSection />
      <CommonIconsSection />
      <CommonIndustryMiddleSection />
      <CommonAcceptItem />
      <CommonIndustryLowerSection />
    </div>
  );
}
