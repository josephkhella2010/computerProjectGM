import { useSelector } from "react-redux";
import styles from "./sendingEmail.module.css";
import { useEffect } from "react";
import type { RootState } from "../../store/store";
export default function SendingEmailContainer() {
  const dots = Array.from({ length: 6 }, (_, i) => i + 1);
  const { isSending } = useSelector((state: RootState) => state.SendingSlice);
  useEffect(() => {
    if (isSending) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSending]);
  return (
    <div className={styles.SendingEmailContainer}>
      <div className={styles.SendingEmailSection}>
        <div className={styles.SendingEmailUpperContent}>
          <p> Wait For Sending Message</p>
        </div>
        <div className={styles.SendingEmailLowerContent}>
          {dots &&
            dots.map((_, index) => {
              return (
                <p
                  key={index}
                  className={styles.dots}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                ></p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
