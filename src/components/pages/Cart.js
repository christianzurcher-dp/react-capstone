import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart({
  cartItems,
  addToCart,
  removeFromCart,
  resetCart,
}) {
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const quantity = {};
    cartItems.forEach((product) => {
      product.id in quantity
        ? (quantity[product.id] += 1)
        : (quantity[product.id] = 1);
    });
    setItemQuantities(quantity);
  }, [cartItems]);

  const truncate = (words, maxLength) => {
    if (words.length > maxLength) {
      return `${words.slice(0, maxLength)} …`;
    }
    return words;
  };

  const itemIds = [];
  let subtotal = 0;
  let shipping = 0;
  const renderCartItems = cartItems.map((product) => {
    subtotal += product.price;
    subtotal > 100 ? (shipping = 0) : (shipping = subtotal * 0.1);
    if (!itemIds.includes(product.id)) {
      itemIds.push(product.id);
      return (
        <div className="product">
          <div className="link">
            <Link exact to={`/products/${product.id}`}>
              <img src={product.image} alt={product.category} />
              <div className="product-info">
                <div className="title">{truncate(product.title, 50)}</div>
                <div className="description">
                  {truncate(product.description, 40)}
                </div>
                <div className="price">
                  ${(product.price * itemQuantities[product.id]).toFixed(2)}
                </div>
              </div>
            </Link>
          </div>
          <div className="buttons">
            <button onClick={() => removeFromCart(product)}>-</button>
            {console.log(itemQuantities)}
            <div className="quantity">{itemQuantities[product.id]}</div>
            <button onClick={() => addToCart(product)}>+</button>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="cart">
      <div className="title">
        {cartItems.length === 0 && (
          <h1>
            No items in cart <br /> Get back to shopping!!
          </h1>
        )}
      </div>
      <div className="product-list">{renderCartItems}</div>
      <div className="checkout">
        <h1>Checkout</h1>
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
        <h3>Shipping: ${shipping.toFixed(2)}</h3>
        <h5>(Free shipping for orders over $100)</h5>
        <h1>Total: ${(subtotal + shipping).toFixed(2)}</h1>
        <button onClick={() => resetCart()}>Purchase</button>
      </div>
    </div>
  );
}
