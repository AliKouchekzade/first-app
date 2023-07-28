import ProductList from "./components/productList/productList";
import NavBar from "./components/navBar/NavBar";
import ProductsProvider from "./components/providers/productsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <NavBar />
      <ProductList />
    </ProductsProvider>
  );
};

export default App;
