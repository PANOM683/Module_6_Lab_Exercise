// Lab Exercise 6.1 - Greeting.jsx

// Greeting component that takes two props: name and children.
// using name prop to conditionally render the greeting text,
// and if name is truthy, then we render Hello {name}, otherwise Hello World.
// also children prop to render any additional message passed to the component, if children is truthy.

// output : Hello John
//          Welcome to our app!

import React from "react";

const Greeting = ({ name, children }) => {
  const greetingText = name ? `Hello ${name}` : "Hello World";
  return (
    <div>
      <h1>{greetingText}</h1>
      {children && <p>{children}</p>}
    </div>
  );
};

export default Greeting;
