import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState ([]); //state for storing plants

  const [searchTerm, setSearchTerm] = useState(""); //search functionality

//load all plants
useEffect(() => {
 fetch ("http://localhost:6001/plants")
  .then((response) => response.json())
  .then((plantsData => setPlants(plantsData)));
},
  []); //prevents loop

//function to handle adding a new plant
function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant]);
}

//function to toggle sold out status
function handleToggleSoldOut(id) {
  setPlants(plants.map(plant => {
      // check if plant id matches
    if (plant.id === id){  
        //if it does, toggle the soldOut status
      return {...plant, soldOut: !plant.soldOut} 
} 
    return plant;
}));
}
//function to handle search input
function handleSearchChange(term) {
  setSearchTerm(term); // update search term state
}
//filter plants based on the search term
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
