import React, {useState} from "react";
import ProductList from "./components/productList/productList";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  const [products,setProducts] = useState([
    { title: "js", price: "99", id: 1, quantity: 1 },
    { title: "css", price: "89", id: 2, quantity: 1 },
    { title: "html", price: "79", id: 3, quantity: 1 },
    { title: "next", price: "109", id: 4, quantity: 1 },
  ]);

  const deleteHandler = (id) => {
    const deletedProduct = products.filter((obj) => obj.id !== id);
    setProducts({ products: deletedProduct });
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

  
    return (
      <>
        <NavBar shop={products.length} />
        <ProductList
          products={products}
          deletee={deleteHandler}
          increase={increaseHandler}
          decrease={decreseHandler}
          onSetText={setTextHandler}
        />
      </>
    );
}

export default App;
