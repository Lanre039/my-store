import React from "react";
import Card from "./Card";

function CardCollection({ collections }) {
  return (
    <div className="row">
      {collections.map((collection, index) => (
        <Card key={index} collection={collection} />
      ))}
    </div>
  );
}

export default CardCollection;
