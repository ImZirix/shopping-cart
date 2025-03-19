import { Link } from "react-router-dom";
/* Diplays basic homepage content */
function Home() {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Croissant Shop</h1>
      <p className="text-lg text-gray-600 mb-6">
        Your one-stop shop for amazing products.
      </p>
      <Link
        to="/shop"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
      >
        Start Shopping
      </Link>
    </section>
  );
}
export default Home;
