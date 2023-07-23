import Product from "./components/product/Product";

const App = () => {
  return (
    <div className="container">
      <h1>HELlllo</h1>
      <Product />
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
