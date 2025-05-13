export default function CartItem({ item }) {
  return (
    // is subject to change
    <div className="cart-item">
      <div className="cart-item-details">
        {item.image} {item.name}
      </div>

      <div className="cart-item-quantity-container">
        <button className="subtract-quantity">-</button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button className="add-quantity">+</button>
      </div>
    </div>
  );
}
