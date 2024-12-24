
import React, { useState } from "react";

const UseStateExample3 = () => {
  const initialvalue = ["apple", "banana"];
  const [list, setList] = useState(initialvalue); // Corrected the variable names and useState syntax.

  const handleAddFruit = () => {
    // Set the list with a new fruit
    const newFruit = "mango";
    setList([...list, newFruit]); // Corrected the state update logic.
  };

  return (
    <>
      <h2>Hello</h2>
      <button onClick={handleAddFruit}>Click to add new fruit</button>
      <ol>
        {list.map((value, index) => (
          <React.Fragment key={index}>
            <li>{value}</li>
          </React.Fragment>
        ))}
      </ol>
    </>
  );
};

export default UseStateExample3;
