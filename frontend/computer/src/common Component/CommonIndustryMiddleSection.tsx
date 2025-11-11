import { useLocation } from "react-router-dom";
import styles from "./CommonIndustryMiddleSection.module.css";
const Arr = [
  {
    url: "https://precisionecycle.com/wp-content/uploads/2024/05/expertise.svg",
    title: "Secure Transportation",
    body: "Ensures safe and secure pickup of electronics from the customer’s location. Proper documentation is created to track where the equipment comes from and where it’s going.",
  },
  {
    url: "https://precisionecycle.com/wp-content/uploads/2024/05/consulting.svg",
    title: "Sorting and Initial Evaluation",
    body: "Upon arrival at the facility, items are inspected and sorted into categories like reusable electronics, recyclable materials, or hazardous waste. Non-functional or obsolete equipment is dismantled to separate components.",
  },
  {
    url: "https://precisionecycle.com/wp-content/uploads/2024/05/personal-data.svg",
    title: "Data Security and Destruction",
    body: "Certified tools or shredding methods are used to meet data destruction standards (like NIST or DoD standards), Certificates of Data Destruction are issued to customers for proof.",
  },
  {
    url: "https://precisionecycle.com/wp-content/uploads/2024/05/electronic-waste.svg",
    title: "Recycling and Downstream Management",
    body: "Materials like metals, plastics, glass, and Focus Materials are sent to responsible downstream vendors or certified facilities, and nothing ends up in landfills or unauthorized locations.",
  },
];
export default function CommonIndustryMiddleSection() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={styles.CommonIndustryMiddleSectionMainContainer}>
      <div className={styles.CommonIndustryMiddleSectionLeftSection}>
        <h1>Our Process</h1>
        <p>
          Precision has industry leading processes to ensure the proper handling
          of medical equipment.
        </p>
        <img
          src={
            path === "/medical-page"
              ? "/Foto/industryMedical.jpg"
              : "/Foto/governmentImgOne.jpg"
          }
          alt="not found"
        />
      </div>
      <div className={styles.CommonIndustryMiddleSectionRightSection}>
        {Arr &&
          Arr.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.CommonIndustryMiddleSectionContent}
              >
                <img src={item.url} alt=" not found" />
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
