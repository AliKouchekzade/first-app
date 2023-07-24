import Product from "../product/Product";
import React, { Component } from "react";
import styles from './productList.module.css';

class ProductList extends Component {
  state = {
    products: [
      { title: "js", price: "99" , id : 1 , quantity : 1},
      { title: "css", price: "89" , id : 2 , quantity : 1},
      { title: "html", price: "79" , id : 3 , quantity : 1},
      {title:"next" , price: "109", id : 4 , quantity : 1}
    ],
  };

  deleteHandler = (id) => {
    /*const copy = [...this.state.products];
    copy.forEach((obj,index) => {if (obj.id === id) copy.splice(index,1)});
    this.setState({products : copy});*/
    const deletedProduct = this.state.products.filter(obj => obj.id !== id);
    this.setState({products : deletedProduct});
  };

  increaseHandler = (id) => {
    const copy = [...this.state.products];
    copy.forEach((obj,index) => {if (obj.id === id) copy[index].quantity++ ;});
    this.setState({products : copy})
  };

  render() {
    return (
      <div className={styles.productList}>
        {this.state.products.map((product, index) => (
          <Product
            product = {product}
            delete = {() => this.deleteHandler(product.id)}
            increase = {() => this.increaseHandler(product.id)}
            key = {index}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
