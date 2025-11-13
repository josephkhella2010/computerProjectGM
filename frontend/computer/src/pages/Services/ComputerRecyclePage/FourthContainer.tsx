import styles from "./ComputerRecyclePage.module.css";
export default function FourthContainer() {
  return (
    <div className={styles.ComputerRecyclePageFourthContainerMainContainer}>
      <div className={styles.ComputerRecyclePageFourthContainerLeftSection}>
        <div
          className={
            styles.ComputerRecyclePageFourthContainerLeftSectionUpperContent
          }
        >
          <h3>Corporate PC Recycling</h3>
          <h1>Computer Disposal Handled With Care & Precision</h1>
          <p>
            We focus on bulk corporate recycling needs, solving major storage
            and disposal needs of many companies. Call and ask us about all our
            services to maintain your end of life systems.{" "}
          </p>
        </div>

        <ul
          className={
            styles.ComputerRecyclePageFourthContainerLeftSectionLowerContent
          }
        >
          <li>Fast Local Pickup</li>
          <li>Certificates of Destruction Upon Request</li>
          <li>R2 & e-Stewards Compliance</li>
          <li>Most Electronics Items Accepted</li>
        </ul>
      </div>
      <div className={styles.ComputerRecyclePageFourthContainerRigthSection}>
        <img src="/Foto/computerRecycleTwo.jpg" alt="not found" />
      </div>
    </div>
  );
}
