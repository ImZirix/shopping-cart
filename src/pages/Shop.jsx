import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";
/* Fetches & displays products from FakeStore API */
function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useOutletContext();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
export default Shop;
