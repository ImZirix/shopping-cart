import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <>
      <Navbar cartCount={cart.length} />
      <Outlet context={{ addToCart, cart, removeFromCart }} />
      <div></div>
    </>
  );
}

export default App;
