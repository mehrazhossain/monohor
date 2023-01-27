import React from "react";

const Product = ({ product }) => {
  // Truncating product name
  function truncateString(str, num) {
    if (num >= str.length) return str;
    if (num <= 55) return str.slice(0, num) + " ...";
    return str.slice(0, num) + " ...";
  }
  return (
    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div class="relative">
        <img class="w-full rounded-xl" src={product.image} alt="Colors" />
        {product.discount > 0 ? (
          <p class="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
            %{product.discount} Discount
          </p>
        ) : (
          ""
        )}
      </div>
      <h1
        style={{ width: "336px", height: "56px" }}
        className="mt-4 text-gray-800 text-xl font-bold cursor-pointer"
      >
        {truncateString(product.name, 55)}
      </h1>
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <p class="text-gray-600 font-bold text-sm ml-1">
            <i className="fas fa-star text-lightning-yellow-500 text-sm"></i>{" "}
            {product.rating}
            <span class="text-gray-500 font-normal">
              {" "}
              ({product.numReviews} reviews)
            </span>
          </p>
          <button class="text-sm font-medium hover:text-gray-900 p-2 text-gray-700 bg-indigo-100 rounded">
            Add to Cart
          </button>
        </div>
        <div class="flex items-center">
          <p class="text-gray-600 font-bold text-lg ml-1">
            Tk.{product.price}{" "}
            {product.discount > 0 ? (
              <span class="font-normal text-gray-600 text-base line-through">
                {" "}
                {Math.round(
                  product.price + (product.discount / 100) * product.price
                )}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
