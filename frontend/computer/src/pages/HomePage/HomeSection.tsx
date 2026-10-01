import styles from "./childComponent/home.module.css";
import HomePageFifthContainer from "./childComponent/HomePageFifthContainer";
import HomePageFirstContainer from "./childComponent/HomePageFirstContainer";
import HomePageFourthContainer from "./childComponent/HomePageFourthContainer";
import HomePageSecondContainer from "./childComponent/HomePageSecondContainer";
import HomePageSeventhContainer from "./childComponent/HomePageSeventhContainer";
import HomePageSixthContainer from "./childComponent/HomePageSixthContainer";
import HomePageThirdContainer from "./childComponent/HomePageThirdContainer";
import HomePageTrackContainer from "./childComponent/HomePageTrackContainer";
import RevealParent from "./childComponent/RevealParent";
import TrackFoto from "./childComponent/TrackFoto";
import TrackParent from "./childComponent/TrackParent";

export default function HomeSection() {
  return (
    <div className={styles.homepageWrapper}>
      <div className={styles.homepageMainContainer}>
        <RevealParent direction="top">
          <HomePageFirstContainer />
        </RevealParent>
        {/*  track foto section */}
        <div className={styles.trackFotoMainContainer}>
          <TrackParent direction="left">
            <TrackFoto />
          </TrackParent>

          <TrackParent direction="right">
            <TrackFoto />
          </TrackParent>
        </div>

        {/*  track foto section */}

        <RevealParent direction="left">
          <HomePageSecondContainer />
        </RevealParent>

        <HomePageTrackContainer />

        <RevealParent direction="top">
          <HomePageThirdContainer />
        </RevealParent>

        <RevealParent direction="bottom">
          <HomePageFourthContainer />
        </RevealParent>
        <RevealParent direction="right">
          <HomePageFifthContainer />
        </RevealParent>

        <RevealParent direction="right">
          <HomePageSixthContainer />
        </RevealParent>
        <RevealParent direction="bottom">
          <HomePageSeventhContainer />
        </RevealParent>
      </div>
    </div>
  );
}
