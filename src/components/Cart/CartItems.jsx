import CartItem from "./CartItem";

export default function CartItems({ cart }) {
  return (
    <section className="cart-items">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </section>
  );
}
