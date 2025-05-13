import Plant from "./Plant";
import PLANTS from "../../data";
import "./Plants.css";

export default function Plants() {
  return (
    <section className="plants-section">
      <h2>Plants</h2>

      <section className="plants">
        {PLANTS.map((plant) => (
          <Plant key={plant.id} plant={plant} />
        ))}
      </section>
    </section>
  );
}
