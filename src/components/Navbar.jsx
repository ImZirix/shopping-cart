import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
/* shows navigation links and cart item count */
function Navbar({ cartCount }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white  shadow-md p-4 flex justify-between items-center z-50">
      <ul className="flex gap-5 p-5 text-lg">
        <li>
          <Link to="/" className="underline-hover">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="underline-hover">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="underline-hover">
            About
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/cart" className="relative">
            <ShoppingCart size={40} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full tranc">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
