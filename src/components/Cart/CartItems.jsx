export default function CartItems({ cart }) {
  return (
    // is subject to change
    <section className="cart-items">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span className="cart-item-img">{item.image}</span>
          <span className="cart-item-name">{item.name}</span>

          <div className="cart-item-quantity-container">
            <button className="subtract-quantity">-</button>
            <span className="cart-item-quantity">{item.quantity}</span>
            <button className="add-quantity">+</button>
          </div>
        </div>
      ))}
    </section>
  );
}
