import { useLocation } from "react-router-dom";
import styles from "./CommonServiceAskAndAnswer.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

interface AskArrType {
  title: string;
  body: string;
}

const AskArr: AskArrType[] = [
  {
    title: "Are there fees to recycle computers?",
    body: "We offer competitive pricing based on the type and quantity of electronics being recycled. Contact us for a personalized quote.",
  },
  {
    title: "Do you offer certificates of destruction?",
    body: "Yes, we provide certificates upon request to verify the completion of data destruction services for compliance and peace of mind.",
  },
  { title: "What happens to the Computers?", body: "" },
  {
    title: "Can I drop Off My Computers?",
    body: "Yes, we offer convenient drop-off locations for electronic recycling. Please check our website or contact us for the nearest drop-off point and operating hours.",
  },
];

const AskArrServer: AskArrType[] = [
  {
    title: "Are there fees to recycle servers?",
    body: "We offer competitive pricing based on the type and quantity of electronics being recycled. Contact us for a personalized quote.",
  },
  {
    title: "Do you offer certificates of destruction?",
    body: "Yes, we provide certificates upon request to verify the completion of data destruction services for compliance and peace of mind.",
  },
  { title: "What happens to the servers?", body: "" },
  {
    title: "Can I drop Off My servers?",
    body: "Yes, we offer convenient drop-off locations for electronic recycling. Please check our website or contact us for the nearest drop-off point and operating hours.",
  },
];

const AskArrThreeDestructionData: AskArrType[] = [
  {
    title: "What data destruction standards do you follow?",
    body: "We follow DOD 5220.22-M, NIST 800-88, and HIPAA guidelines for data destruction. Our processes are certified and audited regularly. We use multiple-pass data wiping for functional drives and physical destruction for damaged or high-security devices.",
  },
  {
    title: "What kind of media can you destroy?",
    body: "We destroy all data storage media including traditional hard drives, SSDs, flash drives, CDs, DVDs, Blu-ray discs, magnetic tapes, floppy disks, and memory cards. Each media type requires specialized destruction methods to ensure complete data elimination.",
  },
  { title: "Do you provide certificates of destruction?", body: "" },
];

export default function CommonServiceAskAndAnswer() {
  const location = useLocation();
  const path = location.pathname;

  let currentArr: AskArrType[] = [];
  if (path === "/computer-recycle-page") currentArr = AskArr;
  else if (path === "/server-recycle-page") currentArr = AskArrServer;
  else if (path === "/destruction-data-service-page")
    currentArr = AskArrThreeDestructionData;

  const [showBody, setShowBody] = useState<boolean[]>(
    Array(currentArr.length).fill(false)
  );

  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [bodyHeights, setBodyHeights] = useState<number[]>(
    Array(currentArr.length).fill(0)
  );

  useEffect(() => {
    const heights = bodyRefs.current.map((el) => (el ? el.scrollHeight : 0));
    setBodyHeights(heights);

    setShowBody(Array(currentArr.length).fill(false));
  }, [path, currentArr.length]);

  return (
    <div className={styles.CommonServiceAskAndAnswerMainContainer}>
      <div className={styles.CommonServiceAskAndAnswerLeftContainer}>
        <h1>You ask, we answer</h1>
        <p>Have more questions? Send them in directly.</p>
      </div>

      <div className={styles.CommonServiceAskAndAnswerRightContainer}>
        {currentArr.map((item, index) => (
          <div
            key={index}
            className={styles.CommonServiceAskAndAnswerMainContent}
          >
            <div
              className={styles.CommonServiceAskAndAnswerMainContentHeader}
              onClick={() =>
                setShowBody((prev) => {
                  const updated = [...prev];
                  updated[index] = !updated[index];
                  return updated;
                })
              }
            >
              <h3>{item.title}</h3>
              <MdKeyboardArrowDown
                style={{
                  transform: showBody[index]
                    ? "rotate(-180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  color: "#222222",
                  fontSize: "20px",
                }}
              />
            </div>

            <div
              ref={(el) => {
                bodyRefs.current[index] = el;
              }}
              style={{
                maxHeight: showBody[index]
                  ? `${bodyHeights[index] + 20}px`
                  : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                paddingBottom: showBody[index] ? "20px" : "0px",
                color: " #07123cbf",
              }}
            >
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
