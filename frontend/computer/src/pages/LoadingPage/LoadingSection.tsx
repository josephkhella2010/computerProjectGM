import styles from "./Loading.module.css";
export default function LoadingSection() {
  const dots = 12;
  function dotsArray() {
    const arr = Array.from({ length: dots }, (_, i) => i);
    return arr;
  }
  return (
    <div className={styles.loadingSection}>
      <h1>Loading </h1>
      <div className={styles.clock}>
        <div className={styles.spinner}>
          {dotsArray().map((item) => {
            const angle = (360 / dots) * item;
            const delay = (item * 0.1).toFixed(1);
            return (
              <span
                key={item}
                className={styles.circle}
                style={{
                  transform: `rotate(${angle}deg) translateY(-20px) rotate(-${angle}deg)`,
                  animationDelay: `${delay}s`,
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
