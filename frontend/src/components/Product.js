import React from "react";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="relative">
      <div className="relative w-full min-h-[10rem] overflow-hidden rounded-lg">
        <img
          src={
            "/images/Pantene Essential Botanicals Volumizing Shampoo Rosemary & Lemon -1.13L.jfif"
          }
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative mt-4">
        <div className="flex flex-col gap-3">
          {/* product title */}
          <h2
            className="text-[14px] overflow-ellipsis overflow-hidden whitespace-nowrap"
            title={product.name}
          >
            {product.name}
          </h2>
          {/* product price */}
          <div style={{ width: "248px", height: "52px" }}>
            <span className="text-[14px]">&#2547; {product.price}</span>
            {product.discount > 0 ? (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through opacity-50">
                  &#2547;{" "}
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
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />

          {/* product action button */}
          <div className="flex gap-2">
            <button className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">
              Add to cart
            </button>
            <button className="flex-grow flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition rounded-md">
              <i className="fas fa-heart opacity-50"></i>
            </button>
            <button className="flex-grow flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition rounded-md">
              <i className="fas fa-eye opacity-50"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
