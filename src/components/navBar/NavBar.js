import { memo } from "react";
import styles from "./navbar.module.css";
import { useProducts } from "../providers/productsProvider";

const NavBar = () => {
  const productslength = useProducts().length;

  return (
    <div className={styles.navBar}>
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
      <span>{productslength}</span>
    </div>
  );
};

export default memo(NavBar); //only renders when it needs
