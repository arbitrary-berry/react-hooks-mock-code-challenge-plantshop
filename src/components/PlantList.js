import React from "react";
import PlantCard from "./PlantCard";
import { Card } from "semantic-ui-react";

function PlantList({ plants }) { //plantsArr
  const plantCards = plants.map((plant) => { //plantObj
    return <PlantCard key={plant.id} plant={plant} />
  }) //need to be singular not plural
  return (
    <Card.Group itemsPerRow={4}>
      {plantCards}
    </Card.Group>
  );
}

export default PlantList;
