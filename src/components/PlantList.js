import PlantCard from "./PlantCard";

//render list of all plants
function PlantList({plants, onToggleSoldOut }) {
  return (
    <ul className="cards">

      {/* map over plants array to create each plant card */}
      {plants.map((plant) => (
      <PlantCard key={plant.id} plant={plant} onToggleSoldOut={onToggleSoldOut} />

      ))}
    </ul>
  );
}

export default PlantList;
