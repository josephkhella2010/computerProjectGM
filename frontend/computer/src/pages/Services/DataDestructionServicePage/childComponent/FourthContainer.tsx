import styles from "../DataDestructionServicePage.module.css";
export default function FourthContainer() {
  return (
    <div className={styles.DataDestructionServicePageFourthContainer}>
      <div
        className={styles.DataDestructionServicePageFourthContainerLeftSection}
      >
        <div
          className={
            styles.DataDestructionServicePageFourthContainerLeftSectionUpperContent
          }
        >
          <h3>Enterprise Data Destruction</h3>
          <h1>100% data destruction & security</h1>
          <p>
            Our data destruction processes meet and exceed all major regulatory
            requirements, ensuring your business stays compliant across all
            industries.
          </p>
        </div>
        <div
          className={
            styles.DataDestructionServicePageFourthContainerLeftSectionLowerContent
          }
        >
          <li>Fast Local Pickup</li>
          <li>Certificates of Destruction Upon Request</li>
          <li>R2 & e-Stewards Compliance</li>
          <li>Most Electronics Items Accepted</li>
        </div>
      </div>
      <div
        className={styles.DataDestructionServicePageFourthContainerRightSection}
      >
        <img src="/Foto/dataRecycleTwo.jpg" alt="not found" />
      </div>
    </div>
  );
}
