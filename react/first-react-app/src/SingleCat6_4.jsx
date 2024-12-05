// Lab Exercise 6.4 - SingleCat

import React from "react";

const SingleCat6_4 = ({ cat }) => {
  return (
    <li>
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <img src={cat.image} alt={cat.name} />
    </li>
  );
};

export default SingleCat6_4;
