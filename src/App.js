import Intro from "./Components/intro/Intro";
import About from "./Components/about/About";
import ProductList from "./Components/productList/ProductList";


function App() {
  return (
    <div className="App">
      <Intro />
        <About />
        <ProductList />
    </div>
  );
}

export default App;
