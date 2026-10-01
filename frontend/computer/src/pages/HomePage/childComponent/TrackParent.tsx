/* import type { ReactNode } from "react";
import styles from "./home.module.css";

type TrackParentProps = {
  children: ReactNode;
  direction?: "left" | "right";
};

export default function TrackParent({
  children,
  direction = "left",
}: TrackParentProps) {
  return (
    <div className={styles.trackParent}>
      <div
        className={`${styles.track} ${
          direction === "left" ? styles.trackLeft : styles.trackRight
        }`}
      >
        {children}
      </div>
    </div>
  );
}
 */

import styles from "./home.module.css";

type TrackParentProps = {
  direction?: "left" | "right";
  children: React.ReactNode;
};

export default function TrackParent({
  direction = "left",
  children,
}: TrackParentProps) {
  return (
    <div
      className={`${styles.trackParent} ${
        direction === "left" ? styles.trackLeft : styles.trackRight
      }`}
    >
      {children}
    </div>
  );
}
