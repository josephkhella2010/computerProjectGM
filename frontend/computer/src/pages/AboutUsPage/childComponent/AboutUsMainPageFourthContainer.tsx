import styles from "../AboutUsMainPage.module.css";
export default function AboutUsMainPageFourthContainer() {
  return (
    <div className={styles.aboutUsMainPageFourthContainer}>
      <h1>Innovation and Improvement</h1>
      <p>
        One area that separates GM Computer Recycle from the pack is our
        commitment to constant innovation and workplace improvement. First of
        all, due to the basic health concerns that arise in our business, it is
        very important for us to ensure our workers’ safety and health. Because
        of this, we do everything we can to maintain an injury-free workplace.
        In addition to workplace safety, we all work to minimize pollution and
        maximize our customer’s peace of mind.
      </p>
      <div className={styles.aboutUsMainPageFourthContainerLowerSection}>
        <img src="/Foto/aboutUsThree.jpg" alt="aboutUsThree" />
        <div className={styles.aboutUsMainPageFourthContainerLowerSectionText}>
          <p>
            We are committed to constantly growing, moving forward, and
            improving every aspect of our promise. Quality of service and
            convenience are a driving force of our work. In addition to that,
            the health and safety for our workers and a commitment to the
            environment are all founding values of our company. We want to earn
            your trust as the number one provider of computer electronics
            recycling services.
          </p>
          <p>
            Feel free to give us a call or email us if you have any questions
            about our process or when we’re available,. In fact no detail is too
            small for our team’s attention. We are committed to earn your trust
            as the source for friendly, secure, and convenient computer
            electronics recycling.
          </p>
        </div>
      </div>
    </div>
  );
}
