import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./singleProduct.module.css";
import type { productsType } from "../../helps/interfaces";
import type { RootState } from "../../store/store";
import axios from "axios";
import { setComputerData } from "../../ReduxSlice/ProductSlice";
export default function SingleProductSection() {
  //const rb = useSelector((state) => state.singleComputerData.singleData);
  const dispatch = useDispatch();

  // Fetch all products when component mounts  async function fetchGetProducts() {
  async function fetchGetProducts() {
    try {
      const response = await axios.get(
        "https://q3khkdi9fh.us-east-1.awsapprunner.com/api/products"
      );
      const { products } = response.data;
      dispatch(setComputerData(products));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGetProducts();
  }, []);

  const products: productsType[] = useSelector(
    (state: RootState) => state.computerData.computerData
  );

  const { id } = useParams();
  const idParamsNumber = Number(id);
  const singleProduct = products.find((item) => item.id === idParamsNumber);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleImgClick(index: number) {
    setCurrentIndex(index);
  }
  // create unfinit slider for img
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!singleProduct || !singleProduct.imgs?.length) return;

      if (currentIndex < singleProduct?.imgs.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, singleProduct?.imgs.length, singleProduct]);

  return (
    <div className={styles.singleMainProductWrapper}>
      <div className={styles.singleProductWrapper}>
        <div className={styles.singleProductContainer}>
          <div className={styles.singleProductLeftSection}>
            <div className={styles.imgContainer}>
              {singleProduct?.imgs?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`${styles.mainImg} ${
                    index === currentIndex ? styles.animationClass : ""
                  }`}
                />
              ))}
            </div>
            <div className={styles.singleProductImgsSection}>
              {singleProduct?.imgs &&
                Array.isArray(singleProduct.imgs) &&
                singleProduct.imgs.map((item, index) => {
                  return (
                    <img
                      src={item}
                      alt="not found"
                      key={index}
                      onClick={() => handleImgClick(index)}
                      className={
                        currentIndex === index ? styles.selectedImg : ""
                      }
                    />
                  );
                })}
            </div>
          </div>
          <div className={styles.singleProductRightSection}>
            <h3>{singleProduct?.name}</h3>
            <h6>{singleProduct?.description}</h6>
            <p className={`${styles.price}`}>
              {" "}
              Price is:{"  "}
              <span className={`${styles.throwLineClass}`}>
                {singleProduct?.price} $
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
