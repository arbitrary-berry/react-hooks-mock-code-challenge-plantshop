import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [seachTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then((plants) => setPlants(plants))
}, [])

function handleNewPlant(newGreenPlant) {
  setPlants([...plants, newGreenPlant])
}

function handleSearch(event) {
  setSearchTerm(event.target.value)
}

function plantSearch = plants.filter((plant) =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onHandleSearch={handleSearch} searchTerm={searchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;
