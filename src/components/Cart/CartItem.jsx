export default function CartItem({ item, decreaseQuantity, increaseQuantity }) {
  return (
    // is subject to change
    <div className="cart-item">
      <div className="cart-item-details">
        {item.image} {item.name}
      </div>

      <div className="cart-item-quantity-container">
        <button
          className="decrease-quantity"
          onClick={() => decreaseQuantity(item)}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          className="increase-quantity"
          onClick={() => increaseQuantity(item)}
        >
          +
        </button>
      </div>
    </div>
  );
}
