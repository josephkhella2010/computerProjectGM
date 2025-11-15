import styles from "../ServerRecyclePage.module.css";
export default function FourthContainer() {
  return (
    <div className={styles.serverRecyclePageFourthContainer}>
      <div className={styles.serverRecyclePageFourthContainerLeftSection}>
        <div
          className={
            styles.serverRecyclePageFourthContainerLeftSectionUpperContent
          }
        >
          <h3>Corporate Server Recycling</h3>
          <h1>
            Server & Infrastructure Disposal Handled With Care & Precision
          </h1>
          <p>
            From single servers to complete data center decommissions, we handle
            all enterprise hardware with security and compliance.
          </p>
        </div>
        <div
          className={
            styles.serverRecyclePageFourthContainerLeftSectionLowerContent
          }
        >
          <li>Fast Local Pickup</li>
          <li>Certificates of Destruction Upon Request</li>
          <li>R2 & e-Stewards Compliance</li>
          <li>Most Electronics Items Accepted</li>
        </div>
      </div>
      <div className={styles.serverRecyclePageFourthContainerRightSection}>
        <img src="/Foto/serverRecycleTwo.webp" alt="not found" />
      </div>
    </div>
  );
}
