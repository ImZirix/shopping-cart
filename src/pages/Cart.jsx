import { useOutletContext } from "react-router-dom";
import { X } from "lucide-react";
/* Show all cart items and checkout button */
function Cart() {
  const { cart, removeFromCart } = useOutletContext();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
                  onClick={() => removeFromCart(index)}
                >
                  <X />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold">
              Total: <span className="text-green-600">${totalPrice}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
