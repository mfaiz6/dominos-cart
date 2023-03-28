import './App.css';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import ProductCard from './components/productCard/ProductCard';

function App() {
  return (
    <>
      <Navbar />

      <div className="bodyDivison">
        <ProductCard />
        <Cart />
      </div>

    </>
  );
}

export default App;
