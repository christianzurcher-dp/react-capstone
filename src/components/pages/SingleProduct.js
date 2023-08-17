import { useEffect, useState } from "react";

export default function SingleProduct({ route, products }) {
  const [product, setProduct] = useState("");

  useEffect(() => {
    products.map((prod) => {
      if (prod.id === parseInt(route.match.params.slug)) {
        setProduct(prod);
      }
    });
  }, []);

  return (
    <div className="single-product">
      <img src={product.image} alt={product.category} />
      <div className="product-info">
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
        <div className="price">{product.price}</div>
        <button>add to cart</button>
      </div>
    </div>
  );
}
