import PLANTS from "../../data";
import "./Plants.css";

export default function Plants() {
  const plants = PLANTS.map((plant) => (
    <div key={plant.id} className="plant">
      <span className="plant-img">{plant.image}</span>
      <span className="plant-name">{plant.name}</span>
      <button className="add-to-cart">Add to cart</button>
    </div>
  ));

  return (
    <section className="plants-section">
      <h2>Plants</h2>

      <section className="plants">{plants}</section>
    </section>
  );
}
