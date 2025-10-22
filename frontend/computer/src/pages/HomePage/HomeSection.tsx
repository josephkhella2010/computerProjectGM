import styles from "./home.module.css";
import HomePageFifthContainer from "./HomePageFifthContainer";
import HomePageFirstContainer from "./HomePageFirstContainer";
import HomePageFourthContainer from "./HomePageFourthContainer";
import HomePageSecondContainer from "./HomePageSecondContainer";
import HomePageSeventhContainer from "./HomePageSeventhContainer";
import HomePageSixthContainer from "./HomePageSixthContainer";
import HomePageThirdContainer from "./HomePageThirdContainer";

export default function HomeSection() {
  return (
    <div className={styles.homepageWrapper}>
      <div className={styles.homepageMainContainer}>
        <HomePageFirstContainer />
        <HomePageSecondContainer />
        <HomePageThirdContainer />
        <HomePageFourthContainer />
        <HomePageFifthContainer />
        <HomePageSixthContainer />
        <HomePageSeventhContainer />
        {/*         <HomePageSectionTwo />
         */}{" "}
      </div>
    </div>
  );
}
