import React, { useState } from "react";

const Tour = ({ tour }) => {
  console.log("tour", tour);
  return (
    <>
      <h2>{tour.name}</h2>
      <p>{tour.info}</p>
      <img src={tour.image} alt="" />
    </>
  );
};

export default Tour;
