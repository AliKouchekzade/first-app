import React, { Component, useState } from "react";
import Product from "./components/product/Product";
import HooksCounter from "./components/Counter/hookscounter";
import ClassCounter from "./components/Counter/classCounter";
import HooksObject from "./components/objectchange/hookobject";
import ClassObject from "./components/objectchange/classobject";

/*class App extends Component {
  state = {
    products: [
      { title: "js", price: "99" },
      { title: "css", price: "89" },
      { title: "html", price: "79" },
    ],
  };

  clickHandler = () => {
    this.setState({products: [
        { title: "js", price: "69" },
        { title: "css", price: "59" },
        { title: "html", price: "49" },
      ]});
  }

  render() {
    return (
      <div className="container">
        <h1>HELlllo</h1>
        {this.state.products.map((product) => (
          <Product name={product.title} price={product.price} />
        ))}
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}*/

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

const App = () => {
    return (
        //<HooksCounter />);
        //<ClassCounter />
        //<HooksObject />
        <ClassObject />
    );
}

export default App;
