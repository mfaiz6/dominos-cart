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
    console.log(cart);
  }

  const cartIcon = document.getElementById("cart")
  const closeBtn = document.getElementById("close")

  const handleCloseButton = (e) => {
    openCart(!cart)
    setCartKey(cartKey+1)

    // const cartIcon = document.getElementById("cart")
    cartIcon.classList.remove("cartIconHide")

    // const closeBtn = document.getElementById("close")
    closeBtn.classList.remove("closeButtonShow")
  }

  if(cart) {
    // const cartIcon = document.getElementById("cart")
    cartIcon.classList.add("cartIconHide")

    // const closeBtn = document.getElementById("close")
    closeBtn.classList.add("closeButtonShow")
  }


  

 
  return (
    <>
      <Navbar />

      <div className="bodyDivison">
        <ProductCard cart={cart}  />
        <Cart cart={cart} key={cartKey} />

      </div>
      <span className="material-symbols-outlined cart" id="cart" onClick={handleClick}>shopping_cart</span>
      <span className="material-symbols-outlined closeButton" id='close' onClick={handleCloseButton}>close</span>
    </>
  );
}

export default App;
