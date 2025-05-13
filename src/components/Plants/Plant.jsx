export default function Plant({ plant }) {
  return (
    <div className="plant">
      <figure className="plant-img">{plant.image}</figure>
      <span className="plant-name">{plant.name}</span>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}
