// Lab Exercise 6.2 - SingleCat.jsx

import React from "react";
import "./SingleCat.css";

// I used cat object to display the name, latin name, and image of each cat.
// alt attribute to the img tag to provide text description of the image.

const SingleCat = ({ cat }) => {
  return (
    <li>
      <div className="cat-container">
        <h2 className="cat-name">{cat.name}</h2>
        <p className="cat-latin-name">{cat.latinName}</p>
        <img src={cat.image} alt={cat.name} className="cat-image" />
      </div>
    </li>
  );
};

export default SingleCat;
