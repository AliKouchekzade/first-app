import React, { Component } from "react";
import ProductList from "./components/productList/productList";
import NavBar from "./components/navBar/NavBar";

class App extends Component {
  state = {
    products: [
      { title: "js", price: "99", id: 1, quantity: 1 },
      { title: "css", price: "89", id: 2, quantity: 1 },
      { title: "html", price: "79", id: 3, quantity: 1 },
      { title: "next", price: "109", id: 4, quantity: 1 },
    ],
  };

  deleteHandler = (id) => {
    const deletedProduct = this.state.products.filter((obj) => obj.id !== id);
    this.setState({ products: deletedProduct });
  };

  increaseHandler = (id) => {
    let index = this.state.products.findIndex((obj) => obj.id === id);
    const product = { ...this.state.products[index] };
    const products = [...this.state.products];
    product.quantity++;
    products[index] = product;
    this.setState({ products });
  };

  decreseHandler = (id) => {
    let index = this.state.products.findIndex((obj) => obj.id === id);
    const product = { ...this.state.products[index] };
    const products = [...this.state.products];
    if (product.quantity > 1) {
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    } else this.deleteHandler(id);
  };

  setTextHandler = (event, id) => {
    let index = this.state.products.findIndex((obj) => obj.id === id);
    const product = { ...this.state.products[index] };
    const products = [...this.state.products];
    product.title = event.target.value;
    products[index] = product;
    console.log(this.state);
    this.setState({ products });
  };

  render() {
    return (
      <>
        <NavBar shop={this.state.products.length} />
        <ProductList
          products={this.state.products}
          deletee={this.deleteHandler}
          increase={this.increaseHandler}
          decrease={this.decreseHandler}
          onSetText={this.setTextHandler}
        />
      </>
    );
  }
}

export default App;
