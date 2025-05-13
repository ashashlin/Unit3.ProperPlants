import CartItem from "./CartItem";

export default function CartItems({
  cart,
  decreaseQuantity,
  increaseQuantity,
}) {
  return (
    <section className="cart-items">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      ))}
    </section>
  );
}
