import CartItems from "./CartItems";
import "./Cart.css";

export default function Cart({ cart, decreaseQuantity, increaseQuantity }) {
  return (
    <section className="cart-section">
      <h2>Cart</h2>

      <section className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <CartItems
            cart={cart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        )}
      </section>
    </section>
  );
}
