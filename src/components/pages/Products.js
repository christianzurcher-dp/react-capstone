import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <div className="products">
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="link">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.category} />
                  <div className="product-info">
                    <div className="title">{product.title}</div>
                    <div className="price">${product.price}</div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
