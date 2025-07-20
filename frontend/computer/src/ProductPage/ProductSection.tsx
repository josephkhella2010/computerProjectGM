import styles from "./product.module.css";
import Products from "./childComponent/Product";

export default function ProductSection() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <Products />
      </div>
    </div>
  );
}
