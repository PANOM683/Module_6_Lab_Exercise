// Lab Exercise 6.4 - BigCats

import React, { useState } from "react";
import SingleCat6_4 from "./SingleCat6_4";

// useState hook to define two state variables: cats and filter.
const BigCats = () => {
  const [cats, setCats] = useState([
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "cheetah.jpg",
    },
    { id: 2, name: "Cougar", latinName: "Puma concolor", image: "cougar.jpg" },

    { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "jaguar.jpg" },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "leopard.jpg",
    },

    { id: 5, name: "Lion", latinName: "Panthera leo", image: "lion.jpg" },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "snow-leopard.jpg",
    },
    { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "tiger.jpg" },
  ]);

  // used filter state variable to store a string value that will be used to filter the list of casts by initializing an empty string.
  const [filter, setFilter] = useState("");

  // four event handlers
  // this updates the state variable accordingly

  // sorts the list of cast by A-Z
  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  // sorts the list of cats by Z-A in descending order
  const handleReverseSort = () => {
    const sortedCats = [...cats].sort((a, b) => b.name.localeCompare(a.name));
    setCats(sortedCats);
  };

  // filters the list of cats by Panthera
  const handleFilter = () => {
    const filteredCats = cats.filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setCats(filteredCats);
  };

  // resets the list of cats
  const handleReset = () => {
    setCats([
      {
        id: 1,
        name: "Cheetah",
        latinName: "Acinonyx jubatus",
        image: "cheetah.jpg",
      },
      {
        id: 2,
        name: "Cougar",
        latinName: "Puma concolor",
        image: "cougar.jpg",
      },
      {
        id: 3,
        name: "Jaguar",
        latinName: "Panthera onca",
        image: "jaguar.jpg",
      },
      {
        id: 4,
        name: "Leopard",
        latinName: "Panthera pardus",
        image: "leopard.jpg",
      },
      { id: 5, name: "Lion", latinName: "Panthera leo", image: "lion.jpg" },
      {
        id: 6,
        name: "Snow leopard",
        latinName: "Panthera uncia",
        image: "snow-leopard.jpg",
      },
      {
        id: 7,
        name: "Tiger",
        latinName: "Panthera tigris",
        image: "tiger.jpg",
      },
    ]);
  };

  // each cat is rendered as a SingleCat component
  // cat.id to help react keep track of list items
  return (
    <div>
      <button onClick={handleSort}>Sort by Name (A-Z)</button>
      <button onClick={handleReverseSort}>Sort by Name (Z-A)</button>
      <button onClick={handleFilter}>Filter by Panthera Family</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {cats.map((cat) => (
          <SingleCat6_4 key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
