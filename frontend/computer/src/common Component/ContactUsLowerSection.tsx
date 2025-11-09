import { useNavigate } from "react-router-dom";
import styles from "./ContactUsLowerSection.module.css";

export default function ContactUsLowerSection() {
  const navigate = useNavigate();
  return (
    <div className={styles.recycleLowerContainer}>
      <p>Ready to Recycle Your Electronics? Contact Us</p>
      <button onClick={() => navigate("/contactUs")}>Contact Us</button>
    </div>
  );
}
