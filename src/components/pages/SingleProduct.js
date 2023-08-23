import { useEffect, useState } from "react";

export default function SingleProduct({ route, products, addToCart }) {
  const [product, setProduct] = useState("");

  useEffect(() => {
    products.forEach((prod) => {
      if (prod.id === parseInt(route.match.params.slug)) {
        setProduct(prod);
      }
    });
  }, []);

  return (
    <div className="single-product">
      <img src={product.image} alt={product.category} />
      <div className="product-info">
        <div className="title">
          <h2>{product.title}</h2>
        </div>
        <div className="description">{product.description}</div>
        <div className="price">
          <h2>${product.price?.toFixed(2)}</h2>
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
