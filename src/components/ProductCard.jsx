import { useState } from "react";
/* Displays product details, quantity controls, and add to cart button */
const ProductCard = ({ product, addToCart }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const showFullTitle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" p-4 rounded-sm shadow-md flex flex-col items-center hover:shadow-xl transition-all duration-300 h-100">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-cover mb-3 rounded"
      />
      <h2 className="relative">
        {isExpanded
          ? product.title
          : product.title.length > 30
          ? product.title.slice(0, 30)
          : product.title}
        {product.title.length > 30 && (
          <span
            onClick={showFullTitle}
            className="cursor-pointer hover:text-red-500 hover:font-bold absolute"
          >
            {isExpanded ? "" : "..."}
          </span>
        )}
      </h2>
      <p>${product.price}</p>
      <button
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-auto"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
