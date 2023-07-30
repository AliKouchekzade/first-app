import styles from "./filter.module.css";
import { useProductsAction } from "../providers/productsProvider";
import { useState } from "react";
import SearchBar from "../../common/search/searchBar";

const Filter = () => {
  const productDispatcher = useProductsAction();

  const [selectedSize, setSElectedSize] = useState("");
  const [selectedSort, setSElectedSort] = useState("");

  const filterSizeHandler = (event) => {
    productDispatcher({ type: "filterSize", size: event.target.value });
    productDispatcher({ type: "sortPrice", sort: selectedSort });
    setSElectedSize(event.target.value);
  };

  const sortHandler = (event) => {
    productDispatcher({ type: "sortPrice", sort: event.target.value });
    setSElectedSort(event.target.value);
  };

  return (
    <>
      <SearchBar size = {selectedSize} />
      <div className={styles.filter}>
        <p>filter products based on : </p>
        <div>
          <label>order by :</label>
          <select
            value={selectedSize}
            onChange={(event) => filterSizeHandler(event)}
          >
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div>
          <label>sort by :</label>
          <select value={selectedSort} onChange={(event) => sortHandler(event)}>
            <option value="0">none</option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </div>
      </div>{" "}
    </>
  );
};

export default Filter;
