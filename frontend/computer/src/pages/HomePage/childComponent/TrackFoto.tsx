/* import styles from "./home.module.css";

const Arr = [
  { name: "foto1", url: "/Foto/track/foto1.jpg" },
  { name: "foto2", url: "/Foto/track/foto2.jpg" },
  { name: "foto3", url: "/Foto/track/foto3.jpg" },
  { name: "foto4", url: "/Foto/track/foto4.jpg" },
  { name: "foto5", url: "/Foto/track/foto5.jpg" },
  { name: "foto6", url: "/Foto/track/foto6.jpg" },
  { name: "foto7", url: "/Foto/track/foto7.jpg" },
  { name: "foto8", url: "/Foto/track/foto8.jpg" },
  { name: "foto9", url: "/Foto/track/foto9.jpg" },
  { name: "foto10", url: "/Foto/track/foto10.jpg" },
  { name: "foto11", url: "/Foto/track/foto11.jpg" },
  { name: "foto12", url: "/Foto/track/foto12.jpg" },
];

function FotoGroup({ group }: { group: string }) {
  return (
    <div className={styles.trackGroup}>
      {Arr.map((foto, index) => (
        <div
          key={`${group}-${foto.name}-${index}`}
          className={styles.trackFotoContainer}
        >
          <img
            src={foto.url}
            alt={foto.name}
            className={styles.trackFotoContainerImg}
          />
        </div>
      ))}
    </div>
  );
}

export default function TrackFoto() {
  return (
    <div className={styles.trackSection}>
      <FotoGroup group="first" />
      <FotoGroup group="second" />
    </div>
  );
}
 */

"use client";

import { useEffect, useRef } from "react";
import styles from "./home.module.css";

const Arr = [
  { name: "foto1", url: "/Foto/track/foto1.jpg" },
  { name: "foto2", url: "/Foto/track/foto2.jpg" },
  { name: "foto3", url: "/Foto/track/foto3.jpg" },
  { name: "foto4", url: "/Foto/track/foto4.jpg" },
  { name: "foto5", url: "/Foto/track/foto5.jpg" },
  { name: "foto6", url: "/Foto/track/foto6.jpg" },
  { name: "foto7", url: "/Foto/track/foto7.jpg" },
  { name: "foto8", url: "/Foto/track/foto8.jpg" },
  { name: "foto9", url: "/Foto/track/foto9.jpg" },
  { name: "foto10", url: "/Foto/track/foto10.jpg" },
  { name: "foto11", url: "/Foto/track/foto11.jpg" },
  { name: "foto12", url: "/Foto/track/foto12.jpg" },
];

function FotoGroup({
  group,
  groupRef,
}: {
  group: string;
  groupRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={groupRef}
      className={styles.trackGroup}
      aria-hidden={group === "second"}
    >
      {Arr.map((foto) => (
        <div
          key={`${group}-${foto.name}`}
          className={styles.trackFotoContainer}
        >
          <img
            src={foto.url}
            alt={group === "first" ? foto.name : ""}
            className={styles.trackFotoContainerImg}
          />
        </div>
      ))}
    </div>
  );
}

export default function TrackFoto() {
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = firstGroupRef.current;
    const track = trackRef.current;

    if (!group || !track) return;

    const updateAnimation = () => {
      const width = group.getBoundingClientRect().width;

      track.style.setProperty("--carousel-distance", `${width}px`);
    };

    updateAnimation();

    const resizeObserver = new ResizeObserver(() => {
      updateAnimation();
    });

    resizeObserver.observe(group);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={trackRef} className={styles.trackSection}>
      <FotoGroup group="first" groupRef={firstGroupRef} />

      <FotoGroup group="second" />
    </div>
  );
}
