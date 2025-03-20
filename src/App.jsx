import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, createContext } from "react";
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Navbar cartCount={cart.length} />
      <Outlet />
      <div></div>
    </CartContext.Provider>
  );
}

export default App;
