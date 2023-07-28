import { createContext, useContext, useState } from "react";

const productsContext = createContext();
const productsContextDispatcher = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "js", price: "99", id: 1, quantity: 1 },
    { title: "css", price: "89", id: 2, quantity: 1 },
    { title: "html", price: "79", id: 3, quantity: 1 },
    { title: "next", price: "109", id: 4, quantity: 1 },
  ]);

  return (
    <productsContext.Provider value={products}>
      <productsContextDispatcher.Provider value={setProducts}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(productsContext);
export const useProductsAction = () => useContext(productsContextDispatcher);
