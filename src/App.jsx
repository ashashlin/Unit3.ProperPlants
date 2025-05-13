import { useState } from "react";
import Plants from "./components/Plants/Plants";
import Cart from "./components/cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>

      <main>
        <Plants />
        <Cart cart={cart} />
      </main>
    </>
  );
}
