import { useState } from "react";
import styles from "./searchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useProductsAction } from "../../components/providers/productsProvider";

const SearchBar = ({size}) => {
  const [searchvalue, setSearchValue] = useState("");

  const dispatchProducts = useProductsAction();

  const searchHandler = (event) => {
    dispatchProducts({ type: "filterSize", size });
    dispatchProducts({ type: "search", value: event.target.value });
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <BsSearch />
      <input
        type="text"
        placeholder="search ..."
        value={searchvalue}
        onChange={searchHandler}
      ></input>
    </div>
  );
};

export default SearchBar;
