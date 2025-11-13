/* import styles from "./CommonServiceTestimony.module.css";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
interface TestimonyArrType {
  url: string;
  name: string;
  city: string;
  star: number;
  coloredStar: number;
  body: string;
}
const testimonyArr: TestimonyArrType[] = [
  {
    url: "/Foto/testimonyOne.png",
    name: "Bisho Rashad",
    city: "Iowa",
    star: 5,
    coloredStar: 5,
    body: `“Very professional company. They were able to quickly and efficiently help me recycle my items. Highly recommend this company! Great customer service.”`,
  },
  {
    url: "/Foto/testimonyTwo.png",
    name: "Tod Keyser",
    city: "Iowa",
    star: 5,
    coloredStar: 4.5,

    body: `“Reached out by email through their website, and received a return phone call within 15 minutes. Same day pick up, no charge, and everybody was extremely easy to work with. Thank you!”`,
  },
  {
    url: "/Foto/testimonyThree.png",
    name: "Erik Bobarykin",
    city: "Iowa",
    star: 5,
    coloredStar: 4,
    body: `“I recently used Precision E-Cycle to recycle some old electronics, and I was really impressed. They made the process super easy, and it’s great knowing my e-waste is being handled responsibly. Their focus on sustainability and creating a greener world is clear. If you need to recycle IT equipment, I highly recommend them!”`,
  },
  {
    url: "/Foto/testimonyOne.png",
    name: "Bisho Rashad",
    city: "Iowa",
    star: 5,
    coloredStar: 5,
    body: `“Very professional company. They were able to quickly and efficiently help me recycle my items. Highly recommend this company! Great customer service.”`,
  },
  {
    url: "/Foto/testimonyTwo.png",
    name: "Tod Keyser",
    city: "Iowa",
    star: 5,
    coloredStar: 2.5,

    body: `“Reached out by email through their website, and received a return phone call within 15 minutes. Same day pick up, no charge, and everybody was extremely easy to work with. Thank you!”`,
  },
  {
    url: "/Foto/testimonyThree.png",
    name: "Erik Bobarykin",
    city: "Iowa",
    star: 5,
    coloredStar: 3.5,
    body: `“I recently used Precision E-Cycle to recycle some old electronics, and I was really impressed. They made the process super easy, and it’s great knowing my e-waste is being handled responsibly. Their focus on sustainability and creating a greener world is clear. If you need to recycle IT equipment, I highly recommend them!”`,
  },
];
export default function CommonServiceTestimony() {
  const [currentPage, setCurrentPage] = useState(0);
  const showCard = 3;
  const totalpages = Math.floor(testimonyArr.length % showCard);

  function handlePrev() {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(testimonyArr.length - 1);
    }
    console.log("prev");
  }
  function handleNext() {
    if (currentPage < testimonyArr.length - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(0);
    }
    console.log("next");
  }

  console.log(currentPage);
  return (
    <div className={styles.commonServiceTestimonymainContainer}>
      <div className={styles.commonServiceTestimonyUpperSection}>
        <h3>We Simply Execute</h3>
        <h1>Locally Grown, Nationally Known.</h1>
        <p>Our customers have something to say regarding our services.</p>
      </div>
      <div className={styles.commonServiceTestimonyLowerMainSection}>
        <div className={styles.ArrowContainer}>
          <IoIosArrowBack className={styles.ArrowLeft} onClick={handlePrev} />
          <IoIosArrowForward
            className={styles.ArrowRight}
            onClick={handleNext}
          />
        </div>
        <div
          className={styles.commonServiceTestimonyLowerMainSectionContent}
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          <div className={styles.commonServiceTestimonyLowerSection}>
            {testimonyArr &&
              testimonyArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.commonServiceTestimonymainSection}
                  >
                    <span>#{index + 1}</span> 
                    <div
                      className={styles.commonServiceTestimonymainUpperContent}
                    >
                      <img src={item.url} alt="not found" />
                      <div
                        className={
                          styles.commonServiceTestimonymainUpperContentText
                        }
                      >
                        <h3>{item.name}</h3>
                        <p>{item.city}</p>
                      </div>
                    </div>
                    <div
                      className={styles.commonServiceTestimonymainMiddleContent}
                    >
                      {Array.from({ length: item.star }).map((_, i) => {
                        if (i + 1 <= item.coloredStar) {
                          return <FaStar key={i} color="#FFD700" />;
                        } else if (i + 0.5 === item.coloredStar) {
                          return <FaStarHalfAlt key={i} color="#FFD700" />;
                        } else {
                          return <FaRegStar key={i} color="#ccc" />;
                        }
                      })}
                    </div>
                    <div
                      className={styles.commonServiceTestimonymainLowerContent}
                    >
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
 */

import styles from "./CommonServiceTestimony.module.css";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

interface TestimonyArrType {
  url: string;
  name: string;
  city: string;
  star: number;
  coloredStar: number;
  body: string;
}

const testimonyArr: TestimonyArrType[] = [
  {
    url: "/Foto/testimonyOne.png",
    name: "Bisho Rashad",
    city: "Iowa",
    star: 5,
    coloredStar: 5,
    body: `“Very professional company. They were able to quickly and efficiently help me recycle my items. Highly recommend this company! Great customer service.”`,
  },
  {
    url: "/Foto/testimonyTwo.png",
    name: "Tod Keyser",
    city: "Iowa",
    star: 5,
    coloredStar: 4.5,
    body: `“Reached out by email through their website, and received a return phone call within 15 minutes. Same day pick up, no charge, and everybody was extremely easy to work with. Thank you!”`,
  },
  {
    url: "/Foto/testimonyThree.png",
    name: "Erik Bobarykin",
    city: "Iowa",
    star: 5,
    coloredStar: 4,
    body: `“I recently used Precision E-Cycle to recycle some old electronics, and I was really impressed. They made the process super easy, and it’s great knowing my e-waste is being handled responsibly. Their focus on sustainability and creating a greener world is clear. If you need to recycle IT equipment, I highly recommend them!”`,
  },
  {
    url: "/Foto/testimonyOne.png",
    name: "Bisho Rashad",
    city: "Iowa",
    star: 5,
    coloredStar: 5,
    body: `“Very professional company. They were able to quickly and efficiently help me recycle my items. Highly recommend this company! Great customer service.”`,
  },
  {
    url: "/Foto/testimonyTwo.png",
    name: "Tod Keyser",
    city: "Iowa",
    star: 5,
    coloredStar: 2.5,
    body: `“Reached out by email through their website, and received a return phone call within 15 minutes. Same day pick up, no charge, and everybody was extremely easy to work with. Thank you!”`,
  },
  {
    url: "/Foto/testimonyThree.png",
    name: "Erik Bobarykin",
    city: "Iowa",
    star: 5,
    coloredStar: 3.5,
    body: `“I recently used Precision E-Cycle to recycle some old electronics, and I was really impressed. They made the process super easy, and it’s great knowing my e-waste is being handled responsibly. Their focus on sustainability and creating a greener world is clear. If you need to recycle IT equipment, I highly recommend them!”`,
  },
];

export default function CommonServiceTestimony() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [showCard, setShowCard] = useState<number>(3);
  const gap = 20;
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(testimonyArr.length / showCard);

  // Navigation
  function handlePrev() {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    function updateWidth() {
      let newShowCard = 3;

      if (window.innerWidth < 750) newShowCard = 1;
      else if (window.innerWidth < 1000) newShowCard = 2;

      setShowCard(newShowCard);
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const width = (containerWidth - gap * (showCard - 1)) / showCard;
        setCardWidth(width);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [showCard, gap]);

  // Calculate translate
  // Number of cards before current page
  const cardsBefore = currentPage * showCard;
  const translate = -(
    cardsBefore * cardWidth +
    Math.min(cardsBefore, testimonyArr.length - 1) * gap
  );

  return (
    <div className={styles.commonServiceTestimonymainContainer}>
      <div className={styles.commonServiceTestimonyUpperSection}>
        <h3>We Simply Execute</h3>
        <h1>Locally Grown, Nationally Known.</h1>
        <p>Our customers have something to say regarding our services.</p>
      </div>

      <div className={styles.commonServiceTestimonyLowerMainSection}>
        <div className={styles.ArrowContainer}>
          <IoIosArrowBack className={styles.ArrowLeft} onClick={handlePrev} />
          <IoIosArrowForward
            className={styles.ArrowRight}
            onClick={handleNext}
          />
        </div>

        <div
          className={styles.commonServiceTestimonyLowerMainSectionContent}
          ref={containerRef}
          style={{ overflow: "hidden" }}
        >
          <div
            className={styles.commonServiceTestimonyLowerSection}
            style={{
              display: "flex",
              gap: `${gap}px`,
              transform: `translateX(${translate}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {testimonyArr.map((item, index) => (
              <div
                key={index}
                className={styles.commonServiceTestimonymainSection}
                style={{ flex: `0 0 ${cardWidth}px` }}
              >
                <div className={styles.commonServiceTestimonymainUpperContent}>
                  <img src={item.url} alt="not found" />
                  <div
                    className={
                      styles.commonServiceTestimonymainUpperContentText
                    }
                  >
                    <h3>{item.name}</h3>
                    <p>{item.city}</p>
                  </div>
                </div>

                <div className={styles.commonServiceTestimonymainMiddleContent}>
                  {Array.from({ length: item.star }).map((_, i) => {
                    if (i + 1 <= item.coloredStar)
                      return <FaStar key={i} color="#FFD700" />;
                    else if (i + 0.5 === item.coloredStar)
                      return <FaStarHalfAlt key={i} color="#FFD700" />;
                    else return <FaRegStar key={i} color="#ccc" />;
                  })}
                </div>

                <div className={styles.commonServiceTestimonymainLowerContent}>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
