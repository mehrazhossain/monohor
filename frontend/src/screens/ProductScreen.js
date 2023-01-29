import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <h1>test {product.name}</h1>
    </div>
  );
};

export default ProductScreen;
