import FourthContainer from "./FourthContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import styles from "./whatAccept.module.css";
export default function WhatAcceptPage() {
  return (
    <div className={styles.whatAcceptMainWrapper}>
      <div className={styles.whatAcceptMainContainer}>
        <div className={styles.whatAcceptFirstContainer}>What We Accept</div>
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
      </div>
    </div>
  );
}
