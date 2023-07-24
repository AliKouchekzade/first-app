import React, { Component, useState } from "react";
//import Product from "./components/product/Product";
//import ClassCounter from "./components/Counter/classCounter";
//import HooksObject from "./components/objectchange/hookobject";
//import HooksCounter from "./components/Counter/hookscounter";
//import ClassObject from "./components/objectchange/classobject";
//import HookArray from "./components/array/hookarray";
import ProductList from "./components/productList/productList";
import styles from "./App.module.css";

class App extends Component {
  state = {
    count: 0,
  };

  clickHandler = () => {
    // const copy = {...this.state};
    // copy.products.map(element => element.price -=10);
    //this.setState(copy);
    //this.setState({...this.state.products.map(element => element.price -=10)});
    this.setState((preState) => {
      return { count: preState.count + 1 };
    });
    console.log(this.state);
    //console.log(khar);
    /*this.setState({products: [
        { title: "js", price: "69" },
        { title: "css", price: "59" },
        { title: "html", price: "49" },
      ]});*/
  };

  render() {
    return (
      <>
        <ProductList />
      </>
    );
  }
}

/*const App = () => {
  return (
    <div className="container">
      <h1>HELlllo</h1>
      <Product name="js" price="10" />
      <Product name="htm" price="20">
        <p>discount is 15%</p>
      </Product>
      <Product name="css" price="30" />
    </div>
  );
};*/

/*const App = () => {
    return React.createElement(
      "div",
      { id: "title", className: "app-title" },
      "this is my first app"
    );
  };*/

/*const App = () => {
  const [products, setProducts] = useState([
    { title: "js", price: "99" },
    { title: "css", price: "89" },
    { title: "html", price: "79" },
  ]);

  const clickHandler = () => {
    setProducts([
        { title: "js", price: "69" },
        { title: "css", price: "59" },
        { title: "html", price: "49" },
      ]);
  }

  return (
    <div className="container">
      <h1>HELlllo</h1>
      {products.map((product) => (
        <Product name={product.title} price={product.price} />
      ))}
      <button onClick={clickHandler}>click me</button>
    </div>
  );
};*/

/*const App = () => {
    return (
        //<HooksCounter />);
        //<ClassCounter />
        //<HooksObject />
        //<ClassObject />
        <HookArray />
    );
}*/

export default App;
