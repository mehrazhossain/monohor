import React from "react";

const Product = ({ product }) => {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2">
      {/* card */}
      <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/headphone.jpg"
          alt=""
        />
        <div className="p-5 flex flex-col gap-3">
          {/* badge */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              stock ready
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              official store
            </span>
          </div>
          {/* product title */}
          <h2
            className="font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap"
            title={product.name}
          >
            {product.name}
          </h2>
          {/* product price */}
          <div style={{ width: "248px", height: "52px" }}>
            <span className="text-lg font-bold">Tk {product.price}</span>
            {product.discount > 0 ? (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through opacity-50">
                  Tk{" "}
                  {Math.round(
                    product.price + (product.discount / 100) * product.price
                  )}
                </span>
                <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
                  save {product.discount}%
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* product rating */}
          <span>
            <i className="fas fa-star text-lightning-yellow-500"></i>
            <i className="fas fa-star text-lightning-yellow-500"></i>
            <i className="fas fa-star text-lightning-yellow-500"></i>
            <i className="fas fa-star-half-alt text-lightning-yellow-500"></i>
            <i className="fas fa-star-half-alt text-lightning-yellow-500"></i>
            <span className="text-xs ml-2 text-gray-500">
              {product.numReviews} reviews
            </span>
          </span>

          {/* product action button */}
          <div className="mt-5 flex gap-2">
            <button className="bg-[#063970] hover:bg-[#032d5a] px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
              Add to cart
            </button>
            <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
              <i className="fas fa-heart opacity-50"></i>
            </button>
            <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
              <i className="fas fa-eye opacity-50"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
