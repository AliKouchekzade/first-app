import Product from "../product/Product";
import styles from "./productList.module.css";

const ProductList = ({ deletee, increase, decrease, onSetText, products,preState }) => {

  if (!products.length)
    return <div className={styles.productList}>there is nothing here</div>;

  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <Product
          product={product}
          preState = {preState[index]}
          onDelete={() => deletee(product.id)}
          increase={() => increase(product.id)}
          decrease={() => decrease(product.id)}
          onSetText={(event) => onSetText(event, product.id)}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProductList;
