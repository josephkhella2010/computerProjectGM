import { useNavigate } from "react-router-dom";
import styles from "../AboutUsMainPage.module.css";
export default function AboutUsMainPageSixthContainer() {
  const navigate = useNavigate();
  return (
    <div className={styles.recycleLowerContainer}>
      <p>Ready to Recycle Your Electronics? Contact Us</p>
      <button onClick={() => navigate("/contactUs")}>Contact Us</button>
    </div>
  );
}
