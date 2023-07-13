import React, { useState } from "react"; //add state

function PlantCard({ plant }) { //remember the {}
  
  const [inStock, setInStock] = useState(true) //

  function toggleStock(){
    setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={toggleStock} 
        className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
//toggle button & hide (false null), delete button-advanced, and increment