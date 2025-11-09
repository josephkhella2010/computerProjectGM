import { FaCheck } from "react-icons/fa6";
import styles from "./home.module.css";
const Arr = [
  { title: "Advanced technologies and practices for eco-friendly disposal." },
  {
    title:
      "Trustworthy reputation for safeguarding client data throughout the recycling process.",
  },
  {
    title:
      "Flexible solutions tailored to meet the unique needs of each client.",
  },
  { title: "Years of experience in electronic recycling industry." },
];
export default function HomePageFifthContainer() {
  return (
    <div className={styles.homePageFifthContainerMainContainer}>
      <div className={styles.homePageFifthContainerImgSection}>
        <img src="/Foto/aboutUs.jpg" alt="non found" />
      </div>
      <div className={styles.homePageFifthContainerTextSection}>
        <h3>Why Choose Us</h3>
        <h3>Why Choose GM Computer Recycle</h3>
        <p>
          When considering electronic recycling partners, GM Computer Recycle
          stands out for our unwavering dedication to environmental
          sustainability and data security. With years of experience in the
          industry, we have honed our processes to ensure the highest standards
          of responsible recycling.
        </p>
        <div className={styles.homePageFifthContainerTextSectionContent}>
          {Arr &&
            Arr.map((text, index) => {
              return (
                <div
                  key={index}
                  className={
                    styles.homePageFifthContainerTextSectionContentInnerSection
                  }
                >
                  <div className={styles.checkedIconContainer}>
                    <FaCheck className={styles.checkedIcon} />
                  </div>
                  <p>{text.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
