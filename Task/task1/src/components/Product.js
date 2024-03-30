import React from 'react';

function Product({product}) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default Product;
