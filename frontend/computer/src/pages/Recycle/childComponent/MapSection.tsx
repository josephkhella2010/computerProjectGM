import styles from "../recycle.module.css";
export default function MapSection() {
  return (
    <div className={styles.recycleMiddleContainerRightSection}>
      <h3>Drop Off Between 9am - 5pm</h3>
      <p>
        If you'd like to drop off your items please call us in ahead to schedule
        a time so we can meet you.
      </p>
      <img src="/Foto/map.png" alt="" />
    </div>
  );
}
