// Lab Exercise 6.2 - BigCats

import React from "react";
import SingleCat from "../Components/SingleCat";
import cheetah from "../Images/cheetah.jpg";
import cougar from "../Images/cougar.jpg";
import jaguar from "../Images/jaguar.jpg";
import leopard from "../Images/leopard.jpg";
import lion from "../Images/lion.jpg";
import snowLeopard from "../Images/snow-leopard.jpg";
import tiger from "../Images/tiger.jpg";

// I added a id property to each cat object in the cats array.

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: cheetah,
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: cougar,
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: jaguar,
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: leopard,
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: lion,
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: snowLeopard,
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: tiger,
  },
];

// Also added a SingleCat component to render each cat individually.

const BigCats = () => {
  return (
    <div>
      <h1>Big Cats</h1>
      <ul>
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
