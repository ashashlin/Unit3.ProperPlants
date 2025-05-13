import { useState } from "react";
import Plants from "./components/plants/Plants";
import Cart from "./components/cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const isFound = cart.find((item) => item.id === plant.id);

    if (!isFound) {
      setCart([
        ...cart,
        {
          id: plant.id,
          image: plant.image,
          name: plant.name,
          quantity: 1,
        },
      ]);

      return;
    }

    increaseQuantity(plant);
  }

  function decreaseQuantity(item) {
    setCart((prevCart) =>
      prevCart
        .map((prevItem) => {
          if (prevItem.id === item.id) {
            const newQuantity = prevItem.quantity - 1;

            if (newQuantity === 0) return null;

            return {
              ...prevItem,
              quantity: newQuantity,
            };
          } else {
            return prevItem;
          }
        })
        .filter(Boolean)
    );
  }

  function increaseQuantity(item) {
    setCart((prevCart) =>
      prevCart.map((prevItem) => {
        if (prevItem.id === item.id) {
          return {
            ...prevItem,
            quantity: prevItem.quantity + 1,
          };
        } else {
          return prevItem;
        }
      })
    );
  }

  return (
    <>
      <h1>Proper Plants</h1>

      <main>
        <Plants addToCart={addToCart} />
        <Cart
          cart={cart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </main>
    </>
  );
}
