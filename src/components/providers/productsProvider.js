import { createContext, useContext, useReducer } from "react";
import { productsData } from "../db/products";

const productsContext = createContext();
const productsContextDispatcher = createContext();

const ProductsProvider = ({ children }) => {
  /*const [products, setProducts] = useState([
    { title: "js", price: "99", id: 1, quantity: 1 },
    { title: "css", price: "89", id: 2, quantity: 1 },
    { title: "html", price: "79", id: 3, quantity: 1 },
    { title: "next", price: "109", id: 4, quantity: 1 },
  ]);*/

  /*const initialState = [
    { title: "js", price: "99", id: 1, quantity: 1 },
    { title: "css", price: "89", id: 2, quantity: 1 },
    { title: "html", price: "79", id: 3, quantity: 1 },
    { title: "next", price: "109", id: 4, quantity: 1 },
  ];*/

  const [products, dispatchProducts] = useReducer(reducer, productsData);

  return (
    <productsContext.Provider value={products}>
      <productsContextDispatcher.Provider value={dispatchProducts}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(productsContext);
export const useProductsAction = () => useContext(productsContextDispatcher);

const reducer = (state, action) => {
  if (action.type === "delete")
    return state.filter((obj) => obj.id !== action.id);

  if (action.type === "filterSize")
    return productsData.filter((obj) =>
      obj.availableSizes.includes(action.size)
    );

  if (action.type === "sortPrice")
    return [...state].sort((a, b) => {
      if (action.sort === "ascending") return a.price - b.price;
      else if (action.sort === "descending") return b.price - a.price;
      else return Math.ceil(Math.random() * 6) - 3;
    });

  let index = state.findIndex((obj) => obj.id === action.id);
  const product = { ...state[index] };
  const updateProducts = [...state];

  if (action.type === "add") {
    product.quantity += action.value;
    if (product.quantity === 0)
      return state.filter((obj) => obj.id !== action.id);
  } else if (action.type === "setText")
    product.title = action.event.target.value;

  updateProducts[index] = product;
  return updateProducts;
};
/*export const useProductsAction = () => {
  const setProducts = useContext(productsContextDispatcher);
  const products = useProducts();

  const deleteHandler = (id) => {
    const deletedProduct = products.filter((obj) => obj.id !== id);
    setProducts(deletedProduct);
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

  return { deleteHandler, increaseHandler, decreseHandler, setTextHandler };
};*/
