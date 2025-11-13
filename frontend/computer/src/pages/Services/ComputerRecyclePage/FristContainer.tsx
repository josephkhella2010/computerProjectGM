import { FaRegArrowAltCircleRight } from "react-icons/fa";
import styles from "./ComputerRecyclePage.module.css";
import { useNavigate } from "react-router-dom";

export default function FristContainer() {
  const navigate = useNavigate();
  return (
    <div className={styles.ComputerRecyclePageFirstContainerMainContainer}>
      <div className={styles.ComputerRecyclePageFirstContainerLeftSection}>
        <h1>Computer & Laptop Disposal & Recycling Services</h1>
        <p>
          Secure recycling of computers, desktops & laptops ensuring all proper
          procedures are met.
        </p>
        <button onClick={() => navigate("/recycle")}>
          Recycle Now{" "}
          <FaRegArrowAltCircleRight
            style={{
              color: "#d9b9b9",
            }}
          />
        </button>
      </div>
      <div className={styles.ComputerRecyclePageFirstContainerRightSection}>
        <img src="/Foto/computerRecycleOne.jpg" alt="not found" />
      </div>
    </div>
  );
}
