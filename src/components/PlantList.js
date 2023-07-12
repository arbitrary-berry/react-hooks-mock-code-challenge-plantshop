import React from "react";
import PlantCard from "./PlantCard";
import { Card } from "semantic-ui-react";

function PlantList({ plants }) {
  const plantCards = plants.map((plants) => {
    return <PlantCard key={plants.id} plants={plants} />
  })
  return (
    <Card.Group itemsPerRow={4}>
      {plantCards}
    </Card.Group>
  );
}

export default PlantList;
