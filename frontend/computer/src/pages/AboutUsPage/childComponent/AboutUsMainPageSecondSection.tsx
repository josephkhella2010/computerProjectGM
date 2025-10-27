import styles from "../AboutUsMainPage.module.css";
interface ArrType {
  title: string;
  body: string[];
}
const Arr: ArrType[] = [
  {
    title: "We help clients from a broad scope of industries like:",
    body: [
      "corporate businesses",
      "healthcare facilities",
      "hospitals",
      "schools",
      "government agencies",
      "financial institutions",
      "small businesses",
      "legal systems",
      "Universities",
      "and more!",
    ],
  },
  {
    title: "We work with businesses that have needs as wide-ranging as:",
    body: [
      "corporate businesses",
      "healthcare facilities",
      "computers and laptops",
      "printers",
      "copiers",
      "IT equipment",
      "fax machines",
      "monitors",
      "servers",
      "networking equipment",
      "all connecting, wiring, and cabling racks",
      "and more!",
    ],
  },
];
export default function AboutUsMainPageSecondSection() {
  return (
    <div className={styles.aboutUsMainPageSecondContainer}>
      <h1>Industries We Serve</h1>
      <p>
        Technology Recyclers serves over 4,000 clients in a wide variety of
        industries- It doesn’t matter how big or small, we do it all!
      </p>
      <div className={styles.aboutUsMainPageSecondContainerLowerContent}>
        {Arr.map((item, ind) => {
          return (
            <div
              key={ind}
              className={styles.aboutUsMainPageSecondContainerLowerContentText}
            >
              <h3>{item.title}</h3>
              {item.body.map((bodyItem, bodyInd) => {
                return <p key={bodyInd}> ● {bodyItem}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
