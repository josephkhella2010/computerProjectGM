import styles from "./ComputerRecyclePage.module.css";
interface ArrType {
  title: string;
  body: string;
}
const Arr: ArrType[] = [
  {
    title: "Provide Pickup Information",
    body: "Send us all available information regarding your recycling needs, prioritizing itemization.",
  },

  {
    title: "We provide Offer",
    body: "We will get back with our estimated pickup cost or offer free pickup. ",
  },
  {
    title: "Scheduled Pickup",
    body: "Once we have agreed terms, we will schedule a pickup date and arrive at your location.",
  },
];
export default function FifthContainer() {
  return (
    <div className={styles.ComputerRecyclePageFifthContainerMainContainer}>
      <div className={styles.ComputerRecyclePageFifthContainerUpperSection}>
        <h3>Ready To Hire Precision?</h3>
        <h1>Easy To get Started</h1>
      </div>
      <div className={styles.ComputerRecyclePageFifthContainerLowerSection}>
        {Arr &&
          Arr.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  styles.ComputerRecyclePageFifthContainerLowerSectionMainContent
                }
              >
                <div
                  className={
                    styles.ComputerRecyclePageFifthContainerLowerSectionNumberContent
                  }
                >
                  {index + 1}
                </div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
