import styles from "./whatAccept.module.css";
export default function FourthContainer() {
  return (
    <div className={styles.FourthContainerMainContainer}>
      <div className={styles.FourthContainerLeftSection}>
        <h4>Alternative Disposal</h4>
        <h1>Where To Dispose Items We Don’t Accept</h1>
        <p>
          For items we don't accept, consider alternative disposal methods to
          ensure responsible handling and environmental stewardship. Local
          recycling centers or specialized facilities may offer suitable options
          for safely disposing of electronic waste. By choosing responsible
          disposal methods, you contribute to minimizing environmental impact
          and promoting sustainability. Explore available resources in your area
          to find the best solution for disposing of items we cannot accept.
        </p>
      </div>
      <div className={styles.FourthContainerRightSection}>
        <img src="/Foto/acceptThree.webp" alt="not found" />
        <img src="/Foto/acceptFour.webp" alt="not found" />
      </div>
    </div>
  );
}
