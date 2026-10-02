import styles from "./home.module.css";
export default function HomePageSeventhContainer() {
  return (
    <div className={styles.HomePageSecondSectionInnerContent}>
      <div className={styles.homePageInnerSection}>
        <h4>SHOPINVERSE Iwoa</h4>

        <p>
          <a href="tel:+15156812487">+15156812487</a>{" "}
        </p>
        <p>
          📍{" "}
          <a
            href="https://www.google.com/maps/place/GM+COMPUTER+LLC/@41.6143267,-93.7595934,17z/data=!3m1!4b1!4m6!3m5!1s0x87ec210e4f44c319:0x26c0ea6442e0e755!8m2!3d41.6143227!4d-93.7570185!16s%2Fg%2F11smk5wnjg?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            10095 ,Hickman ct unit 1, Iowa ,Clive,50325
          </a>{" "}
          .
        </p>
      </div>
      <div className={styles.homePageInnerSection}>
        <h4>COMPLAINTS</h4>
        <p>
          Have a complain? Whatsapp{" "}
          <a href="tel:+15156812487">+15156812487</a>{" "}
        </p>
      </div>
    </div>
  );
}
