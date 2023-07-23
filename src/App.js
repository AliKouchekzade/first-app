import Product from "./components/product/Product";

const App = () => {
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
};

/*const App = () => {
    return React.createElement(
      "div",
      { id: "title", className: "app-title" },
      "this is my first app"
    );
  };*/

export default App;
