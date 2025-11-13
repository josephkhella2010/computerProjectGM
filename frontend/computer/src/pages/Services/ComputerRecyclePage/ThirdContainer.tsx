import styles from "./ComputerRecyclePage.module.css";

interface ArrType {
  title: string;
  body: string;
}
export default function ThirdContainer() {
  const Arr: ArrType[] = [
    {
      title: "Desktops",
      body: "Towers & bulky units are accepted at Precision, as long as they still have their electrical components inside the towers. ",
    },
    {
      title: "Laptops & Notes",
      body: "Most bulk laptop pickups will qualify for free pickup, regardless of brand or type of laptop.",
    },
    {
      title: "All In One PCs",
      body: "We also recycle PCs that are combination units which may include the monitor as part of the GPU.",
    },
  ];
  return (
    <div className={styles.ComputerRecyclePageThirdContainerMainContainer}>
      {Arr &&
        Arr.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.ComputerRecyclePageThirdContainerSection}
            >
              <h3> {item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
}
