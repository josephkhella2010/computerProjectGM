import styles from "./CommonIconsSection.module.css";
export default function CommonIconsSection() {
  const secondContainerArr = [
    {
      Icon: "/Foto/homePhoto/earth.png",
      title: "Advanced Technology",
      body: "Cutting-edge machinery ensures efficient and environmentally friendly waste recycling processes.",
    },
    {
      Icon: "/Foto/homePhoto/dataSecuirty.png",
      title: "Data Security",
      body: "Stringent protocols safeguard sensitive information throughout the entire recycling journey.",
    },
    {
      Icon: "/Foto/homePhoto/hand.png",
      title: "Tailored Solutions",
      body: "Tailored approaches for client needs, offering convenient electronic waste management options.",
    },
  ];

  return (
    <div className={styles.HomePageSecondContainerMainSection}>
      {secondContainerArr.map((item, ind) => {
        return (
          <div
            key={ind}
            className={styles.HomePageSecondContainerMainSectionContent}
          >
            <img src={item.Icon} alt={item.title} className={styles.svgIcon} />
            <div
              className={
                styles.HomePageSecondContainerMainSectionContentsubContent
              }
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
