import styles from "./navbar.module.css";

const NavBar = ({shop}) => {
  return (
    <div className={styles.navBar}>
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
      <span>{shop}</span>
    </div>
  );
};

export default NavBar;
