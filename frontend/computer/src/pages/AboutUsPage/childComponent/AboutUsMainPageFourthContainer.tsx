import styles from "../AboutUsMainPage.module.css";
export default function AboutUsMainPageFourthContainer() {
  return (
    <div className={styles.aboutUsMainPageFourthContainer}>
      {/*      <h1>Innovation and Improvement</h1>
      <p>
        One area that separates GM Computer Recycle from the pack is our
        commitment to constant innovation and workplace improvement. First of
        all, due to the basic health concerns that arise in our business, it is
        very important for us to ensure our workers’ safety and health. Because
        of this, we do everything we can to maintain an injury-free workplace.
        In addition to workplace safety, we all work to minimize pollution and
        maximize our customer’s peace of mind.
      </p> */}
      <div className={styles.aboutUsMainPageFourthContainerLowerSection}>
        <img src="/Foto/aboutUsPage4.jpg" alt="aboutUsThree" />
        <div className={styles.aboutUsMainPageFourthContainerLowerSectionText}>
          <p>
            GM Computer Recycle provides secure and responsible electronics
            recycling services for federal, state, and local government
            agencies. We accept laptops, computers, servers, and other IT
            equipment, helping agencies safely retire outdated technology.
          </p>
          <p>
            Our process focuses on data security, responsible recycling, and
            environmental protection. GM Computer Recycle is committed to
            providing government organizations with a trusted, professional, and
            sustainable electronics recycling solution.
          </p>
        </div>
      </div>
    </div>
  );
}
