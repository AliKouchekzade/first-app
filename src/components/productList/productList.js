import Product from "../product/Product";
import React, { Component } from "react";
import styles from "./productList.module.css";

class ProductList extends Component {

  render() {
    const {deletee,increase,decrease,onSetText,products} = this.props;

    if (!products.length)
      return <div className={styles.productList}>there is nothing here</div>;

    return (
      <div className={styles.productList}>
        {products.map((product, index) => (
          <Product
            product={product}
            onDelete={() => deletee(product.id)}
            increase={() => increase(product.id)}
            decrease={() => decrease(product.id)}
            onSetText={(event) => onSetText(event, product.id)}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
