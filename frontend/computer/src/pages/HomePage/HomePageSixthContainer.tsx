import { TiArrowSortedDown } from "react-icons/ti";
import styles from "./home.module.css";
import { useEffect, useRef, useState } from "react";

interface ArrType {
  title: string;
  body: string;
}

const Arr: ArrType[] = [
  {
    title: "What types of electronic devices do you recycle?",
    body: "We recycle a wide range of electronic devices, including but not limited to computers, laptops, smartphones, tablets, printers, and peripherals such as keyboards and mice.",
  },
  {
    title: "How do you ensure data security during the recycling process?",
    body: "We employ rigorous data destruction methods, including physical destruction and data wiping using industry-standard software. Our secure facilities and strict protocols guarantee the complete erasure of sensitive information from all recycled devices.",
  },
  {
    title: "Can I drop off my electronic devices for recycling?",
    body: "Yes, we offer convenient drop-off locations for electronic recycling. Please check our website or contact us for the nearest drop-off point and operating hours.",
  },
  {
    title: "What happens to the recycled materials after collection?",
    body: "Recycled materials are processed and sorted to extract valuable components such as metals, plastics, and glass. These materials are then sent to manufacturers for reuse in new products, contributing to a circular economy and reducing the need for raw materials.",
  },
];

export default function HomePageSixthContainer() {
  const [isExpand, setIsExpand] = useState<boolean[]>(
    Array(Arr.length).fill(false)
  );
  const [maxHeights, setMaxHeights] = useState<number[]>(
    Array(Arr.length).fill(0)
  );

  const paraRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleExpand(ind: number) {
    const copy = [...isExpand];
    copy[ind] = !copy[ind];
    setIsExpand(copy);
  }

  // Calculate maxHeights dynamically on resize
  useEffect(() => {
    function handleResize() {
      const newMaxHeights = Arr.map((_, ind) => {
        const paraHeight = paraRefs.current[ind]?.scrollHeight ?? 0;
        const contentHeight = contentRefs.current[ind]?.scrollHeight ?? 0;
        // Expanded: show full content
        // Collapsed: only title + small padding
        return isExpand[ind]
          ? contentHeight + 40
          : contentHeight - paraHeight - 5;
      });
      setMaxHeights(newMaxHeights);
    }

    handleResize(); // initial calculation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpand]); // recalc on expand/collapse

  return (
    <div className={styles.homePageSixthContainerMainContainer}>
      <div className={styles.homePageSixthContainerMapSection}>
        <p className={styles.homePageSixthContainerMapSectionfirstPara}>FAQ</p>
        <p className={styles.homePageSixthContainerMapSectionSecondPara}>
          Frequently Asked Questions
        </p>

        <img
          src="/Foto/homePhoto/earthMap.png"
          alt=""
          className={styles.myMapIcon}
        />
      </div>

      <div className={styles.homePageSixthContainerTextSection}>
        <p className={styles.homePageSixthContainerTextSectionMainPara}>
          Have questions about our electronic recycling process? Check out our
          frequently asked questions below for answers to common inquiries.
          Whether you're wondering about our environmental practices, data
          security measures, or how to participate in our recycling program,
          we've got you covered. If you can't find the information you're
          looking for, feel free to reach out to our friendly team for
          assistance.
        </p>

        <div className={styles.faqContainer}>
          {Arr.map((item, ind) => {
            const maxHeight = maxHeights[ind] ?? 0;

            return (
              <div
                key={ind}
                className={styles.faqSection}
                ref={(el) => {
                  contentRefs.current[ind] = el;
                }}
                style={{
                  maxHeight: `${maxHeight}px`,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div
                  className={styles.faqContainerUpperContent}
                  onClick={() => handleExpand(ind)}
                >
                  <p>{item.title}</p>
                  <div className={styles.arrowIconSectionTwo}>
                    <TiArrowSortedDown
                      className={`${styles.faqContainerIcon} ${
                        isExpand[ind] ? styles.rotateIcon : ""
                      }`}
                    />
                  </div>
                </div>

                <div
                  ref={(el) => {
                    paraRefs.current[ind] = el;
                  }}
                >
                  <p className={styles.faqSectionPara}> {item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
