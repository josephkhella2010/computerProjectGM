import styles from "./home.module.css";
export default function HomePageTrackContainer() {
  const trackArray: string[] = [
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
    "GM Computer Recycle",
  ];
  const loop = [...trackArray, ...trackArray];
  return (
    <div className={styles.trackSkillMainContainer}>
      <div className={styles.trackSkillContainer}>
        <div className={styles.trackSkillSection}>
          {loop &&
            loop.map((lang, index) => {
              return (
                <div key={index} className={styles.trackSkillContent}>
                  <p>{lang}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
