import { useNavigate } from "react-router-dom";
import styles from "./CommonServiceLowerSection.module.css";
export default function CommonServiceLowerSection() {
  const navigate = useNavigate();
  return (
    <div className={styles.CommonServiceLowerSectionMainContainer}>
      <h1>Your Data’s Final Destination — Handled with Precision.</h1>
      <button onClick={() => navigate("/recycle")}> Recycle Now</button>
    </div>
  );
}
