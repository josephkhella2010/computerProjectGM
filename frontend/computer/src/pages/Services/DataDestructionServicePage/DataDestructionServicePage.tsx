import CommonServiceAskAndAnswer from "../../../common Component/CommonServiceAskAndAnswer";
import CommonServiceLowerSection from "../../../common Component/CommonServiceLowerSection";
import CommonServiceTestimony from "../../../common Component/CommonServiceTestimony";
import styles from "./DataDestructionServicePage.module.css";
export default function DataDestructionServicePage() {
  return (
    <div className={styles.dataDestructionServicePageMainContainer}>
      <CommonServiceTestimony />
      <CommonServiceAskAndAnswer />
      <CommonServiceLowerSection />
    </div>
  );
}
