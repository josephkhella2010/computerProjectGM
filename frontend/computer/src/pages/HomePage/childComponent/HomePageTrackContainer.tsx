/* import styles from "./home.module.css";
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
 */

"use client";

import { useEffect, useRef } from "react";
import styles from "./home.module.css";

const trackArray = [
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

function TrackGroup({
  group,
  groupRef,
}: {
  group: string;
  groupRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={groupRef}
      className={styles.trackSkillGroup}
      aria-hidden={group === "second"}
    >
      {trackArray.map((text, index) => (
        <div key={`${group}-${index}`} className={styles.trackSkillContent}>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default function HomePageTrackContainer() {
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = firstGroupRef.current;
    const track = trackRef.current;

    if (!group || !track) return;

    const updateDistance = () => {
      const width = group.getBoundingClientRect().width;

      track.style.setProperty("--track-distance", `${width}px`);
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);

    resizeObserver.observe(group);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.trackSkillMainContainer}>
      <div className={styles.trackSkillContainer}>
        <div ref={trackRef} className={styles.trackSkillSection}>
          <TrackGroup group="first" groupRef={firstGroupRef} />

          <TrackGroup group="second" />
        </div>
      </div>
    </div>
  );
}
