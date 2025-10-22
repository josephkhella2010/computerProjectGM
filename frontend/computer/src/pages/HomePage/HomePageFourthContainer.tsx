import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import { useRef } from "react";
interface ArrType {
  url: string;
  title: string;
  body: string;
}
const Arr: ArrType[] = [
  {
    url: "/Foto/homePhoto/battery.png",
    title: "Electronic Recycling",
    body: "We responsibly collect and recycle electronic devices, ensuring proper disposal while maximizing resource recovery and minimizing environmental impact.",
  },
  {
    url: "/Foto/homePhoto/hand.png",
    title: "Data Destruction",
    body: "Our secure data destruction services guarantee complete erasure of sensitive information from electronic devices, maintaining confidentiality and compliance.",
  },
  {
    url: "/Foto/homePhoto/users.png",
    title: "Consultation",
    body: "Our experts provide guidance on electronic waste management practices and ensure compliance with relevant regulations, fostering responsible and legally sound operations.",
  },
];
export default function HomePageFourthContainer() {
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  // ✅ Define this BEFORE the return statement
  function handleNavigate() {
    navigate("/contactUs");
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") {
      console.log("hi");
      handleNavigate();
    }
  }
  function handleMouseEnter() {
    btnRef.current?.focus();
  }
  return (
    <div className={styles.homepageFourthContainerMainContainer}>
      <div className={styles.homepageFourthContainer}>
        <div className={styles.homepageFourthContainerInnerSection}>
          <div
            className={styles.homepageFourthContainerInnerSectionfirstContent}
          >
            <h3>Our Services</h3>
            <h3>Services We Offer</h3>
            <p>
              Our services encompass a comprehensive approach to electronic
              waste management, ensuring responsible disposal and resource
              recovery.
            </p>
          </div>
          <div
            className={styles.homepageFourthContainerInnerSectionSecondContent}
          >
            {Arr &&
              Arr.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className={
                      styles.homepageFourthContainerInnerSectionSecondContentInnerContent
                    }
                  >
                    <img src={item.url} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                );
              })}
          </div>
          <div
            className={styles.homepageFourthContainerInnerSectionThirdContent}
          >
            <div
              className={
                styles.homepageFourthContainerInnerSectionThirdContentTextSection
              }
            >
              <p>
                Ready to make a difference? Join us in our mission to protect
                the planet and preserve resources for future generations.
                Whether you're a homeowner, business owner, or community
                organizer, you can play a vital role in electronic recycling.
              </p>
              <button
                ref={btnRef}
                onClick={() => handleNavigate()}
                onKeyDown={handleKeyDown}
                onMouseEnter={handleMouseEnter}
              >
                Contact Us
              </button>
            </div>
            <div
              className={
                styles.homepageFourthContainerInnerSectionThirdContentImgSection
              }
            >
              <img
                src="/Foto/homePhoto/conatctUsRecycle.jpg"
                alt="conatctUsRecycle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
