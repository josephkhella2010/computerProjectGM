import styles from "./dropOff.module.css";
import ContactUsLowerSection from "../../../common Component/ContactUsLowerSection";
export default function DropOffPage() {
  return (
    <div className={styles.DropOffMainContainer}>
      <div className={styles.DropOffContainer}>
        <h1>Electronics Drop Off Service</h1>
        <h3>10095 ,Hickman ct unit 1, Iowa ,Clive,50325 United States</h3>
        <p>Drop Off Between 9am - 5pm</p>
        <p>
          If you'd like to drop off your items please call us in ahead to
          schedule a time so we can meet you.
        </p>
        <img src="Foto/map.png" alt="not found" />
      </div>
      <ContactUsLowerSection />
    </div>
  );
}
