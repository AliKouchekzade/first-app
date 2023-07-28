import { useEffect, useRef } from "react";
import Product from "../product/Product";
import styles from "./productList.module.css";
import { useProducts, useProductsAction } from "../providers/productsProvider";

const ProductList = () => {
  const products = useProducts();
  const {deleteHandler,increaseHandler,decreseHandler,setTextHandler} = useProductsAction();

  const preState = useRef(products);

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
    preState.current = [...products];
  }, [products]);

  useEffect(() => {
    return () => console.log("component unmount");
  }, []);

  if (!products.length)
    return <div className={styles.productList}>there is nothing here</div>;

  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <Product
          product={product}
          preTitle={preState.current[index].title}
          onDelete={() => deleteHandler(product.id)}
          increase={() => increaseHandler(product.id)}
          decrease={() => decreseHandler(product.id)}
          onSetText={(event) => setTextHandler(event, product.id)}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProductList;
