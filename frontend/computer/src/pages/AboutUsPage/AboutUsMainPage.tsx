import styles from "./AboutUsMainPage.module.css";
import AboutUsMainPageFifthContainer from "./childComponent/AboutUsMainPageFifthContainer";
import AboutUsMainPageFourthContainer from "./childComponent/AboutUsMainPageFourthContainer";
import AboutUsMainPageSecondSection from "./childComponent/AboutUsMainPageSecondSection";
import AboutUsMainPageSixthContainer from "./childComponent/AboutUsMainPageSixthContainer";
import AboutUsMainPageThirdContainer from "./childComponent/AboutUsMainPageThirdContainer";
import AboutUsMainPageUpperSection from "./childComponent/AboutUsMainPageUpperSection";
export default function AboutUsMainPage() {
  return (
    <div className={styles.aboutUsMainWarpper}>
      <div className={styles.aboutUsWarpper}>
        <div className={styles.aboutUsMainContainer}>
          <AboutUsMainPageUpperSection />
          <AboutUsMainPageSecondSection />
          <AboutUsMainPageThirdContainer />
          <AboutUsMainPageFourthContainer />
          <AboutUsMainPageFifthContainer />
          <AboutUsMainPageSixthContainer />
        </div>
      </div>
    </div>
  );
}
