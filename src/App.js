import React, { Component } from "react";
import Product from "./components/product/Product";

class App extends Component {
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

export default App;
