import { FaRecycle } from "react-icons/fa";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function HomePageFirstContainer() {
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  function handleRecycle() {
    navigate("/recycle");
  }
  function handleMouseRecycle() {
    btnRef.current?.focus();
  }
  function handleKeyRecycle(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") {
      handleRecycle();
    }
  }
  return (
    <div className={styles.HomePageFirstContainerMainSection}>
      <div className={styles.HomePageFirstContainerSection}>
        <div className={styles.HomePageFirstContainerContent}>
          <h1>Our world needs your care.</h1>
          <h3>Revolutionizing IT Recycling for a Greener World.</h3>
          <div className={styles.recycleBtn}>
            <button
              ref={btnRef}
              onClick={handleRecycle}
              onMouseEnter={handleMouseRecycle}
              onKeyDown={handleKeyRecycle}
            >
              {" "}
              <FaRecycle />
              Recycle Now
            </button>
          </div>
        </div>
        <div className={styles.HomePageFirstContainerLowerContent}>
          <p>
            "Revolutionizing IT Recycling for a Greener World" captures the
            essence of GMComputerRecycle's mission to transform electronic waste
            management. By emphasizing the concept of revolutionizing, it
            highlights the innovative approach taken by the company. "IT
            Recycling" specifies the focus on electronic devices and technology,
            while "Greener World" underscores the broader environmental impact
            of their efforts. Together, these words convey Precision E-Cycle's
            commitment to sustainability and the global significance of their
            work.
          </p>
        </div>
        <div className={styles.firstHomePageOverlay}></div>
      </div>
    </div>
  );
}
