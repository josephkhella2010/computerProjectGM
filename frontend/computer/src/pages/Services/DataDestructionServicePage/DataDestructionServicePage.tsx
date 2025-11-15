import CommonServiceAskAndAnswer from "../../../common Component/CommonServiceAskAndAnswer";
import CommonServiceLowerSection from "../../../common Component/CommonServiceLowerSection";
import CommonServiceTestimony from "../../../common Component/CommonServiceTestimony";
import FifthContainer from "../ComputerRecyclePage/FifthContainer";
import SecondContainer from "../ComputerRecyclePage/SecondContainer";
import ThirdContainer from "../ComputerRecyclePage/ThirdContainer";
import FirstContainer from "./childComponent/FirstContainer";
import FourthContainer from "./childComponent/FourthContainer";
import styles from "./DataDestructionServicePage.module.css";
export default function DataDestructionServicePage() {
  return (
    <div className={styles.dataDestructionServicePageMainContainer}>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
      <CommonServiceTestimony />
      <CommonServiceAskAndAnswer />
      <CommonServiceLowerSection />
    </div>
  );
}
