import { Link } from "react-router-dom";
import styles from "../product.module.css";
import type { productsType } from "../../helps/interfaces";

interface Props {
  index: number;
  item: productsType;
}

export default function ProductItems({ item }: Props) {
  const { id, url, name, price, description } = item;

  return (
    <div className={styles.productItemContent}>
      <div className={styles.productImgContent}>
        <img src={url} alt={name}></img>
      </div>
      <div className={styles.productTextContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <p className={`${styles.price}`}>
            {" "}
            Price :{"  "}
            <span className={`${styles.throwLineClass}`}>{price} $</span>
          </p>
        </div>
      </div>
      <Link to={`/product/${id}`} state={item} className={styles.btn}>
        <button>More details</button>
      </Link>
    </div>
  );
}
