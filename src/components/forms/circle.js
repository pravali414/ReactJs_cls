import React, { useState } from "react";

function Circle() {
  const [circles, setCircles] = useState([]); // State to store circle data

  const addCircle = () => {
    setCircles([...circles, false]); // Add a new circle to the state
  };

  const circleClick = (index) => {
    console.log("Circle clicked at index:", index);
  };

  return (
    <>
      <button onClick={addCircle}>Add Circle</button>
      <h2>Total circles: {circles.length}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {circles.map((_, index) => (
          <div
            key={index}
            onClick={() => circleClick(index)} // Handle click event
            style={{
              width: 100,
              height: 100,
              border: "4px solid red",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Circle;
