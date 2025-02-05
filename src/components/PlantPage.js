import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then((plants) => setPlants(plants)) //or .then(setPlants)
}, [])

function handleNewPlant(newGreenPlant) {
  setPlants([...plants, newGreenPlant])
}

function handleSearch(event) {
  setSearchTerm(event.target.value)
}

const plantSearch = plants.filter((plant) =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onHandleSearch={handleSearch} searchTerm={searchTerm}/>
      <PlantList plants={plantSearch} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;
