import { useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import ProductCard from './components/productCard/ProductCard';

function App() {

  const [cart, openCart] = useState(false)
  const [cartKey, setCartKey] = useState(0)

  const handleClick = () => {
    openCart(!cart)
    setCartKey(cartKey+1)
  }

  const handleCloseButton = (e) => {
    openCart(!cart)
    setCartKey(cartKey+1)

  }



  

 
  return (
    <>
      <Navbar />

      <div className="bodyDivison">
        <ProductCard cart={cart} key={cartKey+1}  />
        <Cart cart={cart} key={cartKey} />

      </div>
      {!cart && (<span className="material-symbols-outlined cart" id="cart" onClick={handleClick}>shopping_cart</span>)}
      {cart && (<span className="material-symbols-outlined closeButton" id='close' onClick={handleCloseButton}>close</span>)}
    </>
  );
}

export default App;
