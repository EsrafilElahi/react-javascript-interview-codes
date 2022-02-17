import React from "react";
import CarDetails from "./CarDetails";

const carObj = {
  name: "Audi A5",
  color: "black",
  type: "sedan",
};

export default function Cars() {
  return (
    <div>
      {/* //Child component to render Car Details */}
      <CarDetails data={carObj} />

      {/*       
      <CarDetails name="Honda Civic" color="Blue" type="Sedan" />
      <CarDetails name="Ford Mustand" color="Red" type="Coupe" />
      <CarDetails name="Audi A7" color="Grey" type="Hatchback" /> */}
    </div>
  );
}
