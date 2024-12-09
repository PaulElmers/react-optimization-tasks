import React, { useMemo } from "react";

const ProductList = ({ products }) => {
  const sortedProducts = useMemo(() => {
    console.log("Sorting products by price");
    return [...products].sort((a, b) => a.price - b.price);
  }, [products]);

  return (
    <ul>
      {sortedProducts.map((product) => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
};

export default ProductList;
