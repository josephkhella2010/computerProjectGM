import styles from "../AboutUsMainPage.module.css";

const Arr: string[] = [
  "We are committed to constantly growing, moving forward, and improving every aspect of our promise. Quality of service, your convenience and satisfaction, the health and safety for our workers, and a commitment to the environment are all foundational values of our company. We want to earn your trust as the number one provider of electronic recycling service.",
  "If you have any questions about our process or availability, feel free to give us a call or email us and we will get you the information you need. No detail is too small for our team’s attention. We are committed to earning your trust as the source for environmentally friendly, secure, and convenient electronic recycling.",
  "Our primary target is corporate America, large and small businesses. TR specializes and provides recycling services of electronics, and all IT items, and focuses on Legal, Ethical and 100% destruction of memory related items. All at NO Cost to you – Free, Ethical, Safe, Licensed, Insured, We pride ourselves in clean equipment and fast and punctual scheduling. Let US solve your IT and Electronic Disposal Problem, we are IDEM Bonded.",
  "You have seen us at neighborhood events: Fishers, Carmel, Brownsburg, to name a few, WE also handle IT recycling for many companies and Universities in Indiana, as we meet or exceed all HIPAA, FERPA, DOD and NIST 800-88 guidelines for data destruction.",
  "Aside from these personal electronics, we also work with businesses that have needs as wide-ranging as printers, copiers, telecommunication and IT equipment, medical electronics, and all the connecting, wiring, and cabling racks that go with them. Over the years, we have serviced corporate businesses, healthcare facilities, hospitals, schools, legal systems, government contracts, and more.",
];
const ImgArr: string[] = [
  "/Foto/aboutOne.jpg",
  "/Foto/aboutTwo.jpg",
  "/Foto/aboutThree.jpg",
];
export default function AboutUsMainPageFifthContainer() {
  return (
    <div className={styles.aboutUsMainPageFifthContainer}>
      <div className={styles.aboutUsMainPageFifthContainerImgSection}>
        {ImgArr &&
          ImgArr.map((item, ind) => {
            return <img src={item} alt="not found" key={ind} />;
          })}
      </div>
      <div className={styles.aboutUsMainPageFifthContainerTextSection}>
        {Arr &&
          Arr.map((item, ind) => {
            return <p key={ind}>{item}</p>;
          })}
      </div>
    </div>
  );
}
