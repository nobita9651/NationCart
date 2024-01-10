import React from "react";
import Product from "./Product";

function SortedProductPage({ page, products, productsPerPage }) {
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const productsToDisplay = products.slice(start, end);

  return (
    <div>
      {productsToDisplay.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default SortedProductPage;
