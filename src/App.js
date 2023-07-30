import ProductList from "./components/productList/productList";
import NavBar from "./components/navBar/NavBar";
import ProductsProvider from "./components/providers/productsProvider";
import Filter from "./components/filter/filter";


const App = () => {
  return (
    <ProductsProvider>
      <NavBar />
      <Filter />
      <ProductList />
    </ProductsProvider>
  );
};

export default App;
