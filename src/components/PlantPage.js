import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState ([]);

  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
 fetch ("http://localhost:6001/plants")
  .then((response) => response.json())
  .then((plantsData => setPlants(plantsData)));
},
  []);

function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant]);
}


function handleToggleSoldOut(id) {
  setPlants(plants.map(plant => {
    if (plant.id === id){ 
      return {...plant, soldOut: !plant.soldOut}
} 
    return plant;
}));
}

function handleSearchChange(term) {
  setSearchTerm(term);
}

const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} onToggleSoldOut={handleToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
