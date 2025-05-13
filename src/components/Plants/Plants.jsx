import Plant from "./Plant";
import PLANTS from "../../data";
import "./Plants.css";

export default function Plants({ addToCart }) {
  return (
    <section className="plants-section">
      <h2>Plants</h2>

      <section className="plants">
        {PLANTS.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </section>
    </section>
  );
}
