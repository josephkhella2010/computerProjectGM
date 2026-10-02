import styles from "./home.module.css";
export default function HomePageThirdContainer() {
  return (
    <div className={styles.homePageThirdContainerMainContainer}>
      <div className={styles.homePageThirdContainerLeftSection}>
        <img src="/Foto/homePhoto/holdRecycle.jpg" alt="not found" />
        <div
          className={styles.homePageThirdContainerLeftSectionExperienceSection}
        >
          <img src="/Foto/homePhoto/userCorrect.png" alt="not found" />
          <p> 8+</p>
          <p>Years Experience</p>
        </div>
      </div>
      <div className={styles.homePageThirdContainerRightSection}>
        <h2> ABOUT gm computer recycle</h2>
        <p>
          At GM Computer Recycle, our mission is to make electronics recycling
          simple, responsible, and environmentally conscious. With years of
          experience in electronic recycling, we provide reliable solutions for
          businesses, organizations, government agencies, and individuals
          looking to properly dispose of unwanted computers, laptops, servers,
          and other electronic equipment. We focus on responsible handling, data
          security, and environmentally responsible recycling practices.
        </p>
        <p>
          Our commitment goes beyond collecting and recycling electronics. We
          work with our customers to provide convenient recycling solutions that
          help reduce electronic waste and keep valuable materials out of
          landfills. From business cleanouts and IT equipment recycling to
          community recycling events, GM Computer Recycle is dedicated to
          providing professional service while supporting a cleaner and more
          sustainable future.
        </p>
      </div>
    </div>
  );
}
