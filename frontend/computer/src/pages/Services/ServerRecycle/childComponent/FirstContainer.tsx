import { IoArrowForwardCircleOutline } from "react-icons/io5";
import styles from "../ServerRecyclePage.module.css";
import { useNavigate } from "react-router-dom";
export default function FirstContainer() {
  const navigate = useNavigate();
  return (
    <div className={styles.serverRecyclePageFirstContainer}>
      <div className={styles.serverRecyclePageFirstContainerLeftSection}>
        <h1>Secure Server Disposal & Recycling</h1>
        <p>
          Secure recycling of servers ensuring all proper procedures are met
          including DOD level destruction.
        </p>
        <button onClick={() => navigate("/recycle")}>
          {" "}
          Recycle Now <IoArrowForwardCircleOutline />
        </button>
      </div>
      <div className={styles.serverRecyclePageFirstContainerRightSection}>
        <img src="/Foto/serverRecycleOne.png" alt="not found" />
      </div>
    </div>
  );
}
