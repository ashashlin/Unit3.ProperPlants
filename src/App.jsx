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

    setCart((prevCart) =>
      prevCart.map((prevItem) => {
        if (prevItem.id === plant.id) {
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
        <Cart cart={cart} />
      </main>
    </>
  );
}
