export default function Cart({ cartItems }) {
  const renderCartItems = cartItems.map((item) => {
    return <div>{item.title}</div>;
  });

  return (
    <div>
      <div>{renderCartItems}</div>
    </div>
  );
}
