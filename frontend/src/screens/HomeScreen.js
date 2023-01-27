import React from "react";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <div className="py-20">
      <h3 class="lg:ml-10 ml-12  mb-2 lg:text-4xl text-2xl font-bold text-indigo-600">
        Latest Product
      </h3>
      <div className="min-h-screen flex justify-center items-center">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
