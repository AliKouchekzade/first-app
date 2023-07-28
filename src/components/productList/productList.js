import { useEffect, useRef } from "react";
import Product from "../product/Product";
import styles from "./productList.module.css";
import { useProducts, useProductsAction } from "../providers/productsProvider";

const ProductList = () => {
  const products = useProducts();
  const setProducts = useProductsAction();

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

  const deleteHandler = (id) => {
    const deletedProduct = products.filter((obj) => obj.id !== id);
    setProducts(deletedProduct);
  };

  const increaseHandler = (id) => {
    let index = products.findIndex((obj) => obj.id === id);
    const product = { ...products[index] };
    const updateProducts = [...products];
    product.quantity++;
    updateProducts[index] = product;
    setProducts(updateProducts);
  };

  const decreseHandler = (id) => {
    let index = products.findIndex((obj) => obj.id === id);
    const product = { ...products[index] };
    const updateProducts = [...products];
    if (product.quantity > 1) {
      product.quantity--;
      updateProducts[index] = product;
      setProducts(updateProducts);
    } else deleteHandler(id);
  };

  const setTextHandler = (event, id) => {
    let index = products.findIndex((obj) => obj.id === id);
    const product = { ...products[index] };
    const updateProducts = [...products];
    product.title = event.target.value;
    updateProducts[index] = product;
    setProducts(updateProducts);
  };

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
