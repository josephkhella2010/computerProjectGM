import CommonServiceAskAndAnswer from "../../../common Component/CommonServiceAskAndAnswer";
import CommonServiceLowerSection from "../../../common Component/CommonServiceLowerSection";
import CommonServiceTestimony from "../../../common Component/CommonServiceTestimony";
import styles from "./ComputerRecyclePage.module.css";
import FifthContainer from "./FifthContainer";
import FourthContainer from "./FourthContainer";
import FristContainer from "./FristContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
export default function ComputerRecyclePage() {
  return (
    <div className={styles.ComputerRecyclePageWrapper}>
      <FristContainer />
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
