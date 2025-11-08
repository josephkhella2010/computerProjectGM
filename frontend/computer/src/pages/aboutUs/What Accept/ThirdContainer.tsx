import { FaXmark } from "react-icons/fa6";
import styles from "./whatAccept.module.css";
const notAcceptItem: string[] = [
  "CRT TVs or monitors (the old tube type). This does NOT include flatscreen TV’s and monitors.",
  "Major appliances such as stoves, washers, dryers, and dishwashers.",
  "Household and kitchen appliances.",
  "Anything with Freon: air conditioners and refrigerators.",
  "Alkaline batteries.",
  "Light Bulbs or Fluorescent Tubes.",
  "Paint, antifreeze, or oil.",
  "Vacuums.",
];
export default function ThirdContainer() {
  return (
    <div className={styles.ThirdContainerMainConatiner}>
      <img src="/Foto/acceptTwo.jpg" alt="not found" />
      <div className={styles.ThirdContainerRightContainer}>
        <h4>Non-accepted Items</h4>
        <h1>What We Do Not Accept</h1>
        <div className={styles.ThirdContainerItemContainer}>
          {notAcceptItem &&
            notAcceptItem.map((item, ind) => {
              return (
                <li key={ind}>
                  {" "}
                  <span className={styles.xIconContainer}>
                    <FaXmark className={styles.xIcon} />
                  </span>
                  {item}
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
}
