import React, { useEffect, useState } from "react";
import styles from "../product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import DropDownSection from "./DropDownSection";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import type { RootState } from "../../store/store";
import ProductItems from "./ProductItems";
import type { productsType } from "../../helps/interfaces";
import axios from "axios";
import { setComputerData } from "../../ReduxSlice/ProductSlice";

export interface filterArrType {
  label: string;
  value: string;
}
export default function Products() {
  const [products, setProducts] = useState<productsType[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");

  const [dropDownVal, setDropDownVal] = useState<string>("Choose price");
  const priceFilterArr: filterArrType[] = [
    { label: "Cheaper", value: "Cheaper" },
    { label: "Expensive", value: "Expensive" },
  ];
  const dispatch = useDispatch();

  const productsData = useSelector(
    (state: RootState) => state.computerData.computerData || []
  );
  async function fetchGetProducts() {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      const { products } = response.data;
      dispatch(setComputerData(products));
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(productsData);
  useEffect(() => {
    fetchGetProducts();
  }, []);

  /* useEffect(() => {
    setProducts(productsData);
  }, [productsData]); */
  // create slice page

  // **Pagination State**
  const [currentPage, setCurrentPage] = useState<number>(1);
  const visibleCard: number = 6;
  const showPagesNumber = 3;
  const [startPage, setStartPage] = useState(1);

  // **Apply filtering first, then slice**
  const filteredProducts = products;
  const totalPages = Math.ceil(filteredProducts.length / visibleCard);
  const startIndex = (currentPage - 1) * visibleCard;
  const endIndex = startIndex + visibleCard;
  const SlicedProductArr = filteredProducts.slice(startIndex, endIndex);

  const getVisiblePages = () => {
    const endPage = Math.min(totalPages, startPage + showPagesNumber - 1);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const visiblePages = getVisiblePages();

  const changePage = (page: number) => {
    setCurrentPage(page);

    if (page === visiblePages[visiblePages.length - 1] && page < totalPages) {
      setStartPage((prev) =>
        Math.min(prev + 1, totalPages - showPagesNumber + 1)
      );
    }

    if (page === visiblePages[0] && page > 1) {
      setStartPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  // **Filtering function**
  function filterSection(searchVal: string, dropVal: string) {
    let filteredProduct = [...productsData];

    if (searchVal) {
      filteredProduct = filteredProduct.filter((item) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      );
    }
    if (dropVal === "Expensive") {
      filteredProduct.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (dropVal === "Cheaper") {
      filteredProduct.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    }

    //setProducts(filteredProduct);
    setCurrentPage(1);
    setStartPage(1);
  }

  // **Handlers**
  const handleValue = (val: string) => {
    setDropDownVal(val);
    filterSection(searchVal, val);
  };

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setSearchVal(newVal);
    filterSection(newVal, dropDownVal);
  }

  return (
    <div className={styles.productMainContainer}>
      <div className={styles.filterSection}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="search"
            value={searchVal}
            onChange={(e) => handleSearch(e)}
          />
          <CiSearch />
        </div>
        <div>
          <DropDownSection
            priceFilterArr={priceFilterArr}
            dropDownVal={dropDownVal}
            handleValue={handleValue}
          />
        </div>
      </div>
      <div className={styles.ProductContainer}>
        {SlicedProductArr &&
          SlicedProductArr.map((item, index) => {
            return (
              <ProductItems
                item={item}
                index={startIndex + index}
                key={index}
              />
            );
          })}
      </div>
      {/* Pagination */}
      <div className={styles.paginationContainer}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={styles.prevBtn}
        >
          <MdKeyboardArrowLeft />
        </button>

        {/* Show visible pages */}
        <div className={styles.paginationPages}>
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={
                currentPage === page ? styles.activeBtn : styles.disActiveBtn
              }
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={styles.nextBtn}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
