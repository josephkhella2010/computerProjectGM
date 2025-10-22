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
        <h3> ABOUT US</h3>
        <h2> ABOUT gmcomputerrecycle</h2>
        <p>
          In the heart of our mission at GMcomputerrecycle lies a fervent
          dedication to environmental stewardship and community empowerment.
          With years of expertise in electronic recycling, we stand as a beacon
          of sustainability, providing responsible IT disposal solutions for
          individuals, businesses, and institutions alike. Our state-of-the-art
          facilities are equipped to handle electronic waste with precision and
          care, ensuring that every device is recycled in an eco-friendly
          manner. Beyond mere recycling, we believe in the transformative power
          of education and engagement.
        </p>
        <p>
          At GMcomputerrecycle, our commitment goes beyond just recycling; it
          extends to building a more sustainable and inclusive world. We
          understand that electronic waste is a global challenge with local
          impacts, which is why we work closely with communities to tailor our
          solutions to their unique needs. Whether it's organizing electronic
          waste collection events or providing resources for responsible
          disposal, we are dedicated to making a positive difference at every
          level.
        </p>
      </div>
    </div>
  );
}
