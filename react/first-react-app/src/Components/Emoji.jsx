// Lab Exercise 6.3 - Emoji

import React, { useState } from "react";

// The useState hook returns an array with two values: the current state value (mood) and a function to update the state (setMood).
function Emoji() {
  const [mood, setMood] = useState("happy");

  // The handleMoodChange function updates the mood state by toggling between "happy" and "sad".
  const handleMoodChange = () => {
    setMood(mood === "happy" ? "sad" : "happy");
  };

  // This is conditional expression that checks the value of the mood.
  // If mood is equal to "happy", it returns a span element with the smiley face emoji.
  // If mood is not equal to "happy", it returns a span element with the 'sad' face emoji.

  return (
    <div>
      {mood === "happy" ? <span>😊</span> : <span>😔</span>}
      <button onClick={handleMoodChange}>Change Mood</button>
    </div>
  );
}

export default Emoji;
