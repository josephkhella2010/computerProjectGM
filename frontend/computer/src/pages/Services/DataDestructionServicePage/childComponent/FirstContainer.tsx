import styles from "../DataDestructionServicePage.module.css";
export default function FirstContainer() {
  return (
    <div className={styles.dataDestructionServicePageFirstContainer}>
      <div
        className={styles.dataDestructionServicePageFirstContainerLeftSection}
      >
        <h1>Enterprise Grade Data Destruction</h1>
        <p>
          100% compliant & secure hard drive & storage equipment wiping &
          destruction.
        </p>
      </div>
      <div
        className={styles.dataDestructionServicePageFirstContainerRightSection}
      >
        <img src="/Foto/dataRecycleOne.webp" alt="not found" />
      </div>
    </div>
  );
}
