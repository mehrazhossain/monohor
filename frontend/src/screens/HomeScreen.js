import React from "react";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <div className="py-20">
      <h3 className="lg:ml-32 ml-24 lg:text-2xl text-2xl font-bold text-gray-700">
        LATEST PRODUCTS
      </h3>
      <div className="min-h-screen flex justify-center items-center">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
