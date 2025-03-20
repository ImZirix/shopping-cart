import { Link } from "react-router-dom";
/* Diplays basic homepage content */
function Home() {
  return (
    <section className="text-center py-16 m-t bg-gray-100 min-h-[calc(100vh-7rem)]">
      <h1 className="text-4xl font-bold mb-4 mt-20">
        Welcome to Croissant Shop
      </h1>
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
