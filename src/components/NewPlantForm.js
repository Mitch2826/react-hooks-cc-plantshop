import React from "react";
import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
//form fields state
const [name,setName] = useState("");
const [image,setImage] = useState("");
const [price,setPrice] = useState("");

function handleSubmit(e) {
  e.preventDefault();

//plant object
const newPlant = {name, image, price};

//POST request to add new plant
fetch("http://localhost:6001/plants", {
  method:"POST",
  headers:{
    "Content-Type":"Application/JSON", 
},
  body: JSON.stringify(newPlant), //convert object to JSON string
})
.then((response) => response.json()) 
.then((addedPlant) => { 
    if (onAddPlant) {
      onAddPlant(addedPlant);  // call the callback function to update the plant list
  }
//clear form after submission
    setName("");
    setImage("");
    setPrice("");
});

}


  return (
//adding new plant form
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
