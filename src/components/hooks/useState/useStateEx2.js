import React, { useState } from "react";

const UseStateExample2 = () => {
  const [current, setCurrent] = useState([
    {
      name: "pravallika",
      salary: 122,
      id: 1
    },
    {
      name: "mallika",
      salary: 78,
      id: 2
    }
  ]);

  // Function to increment salary
  const Incrementsalary = (data) => {
    const updatedData = current.map(item => 
      item.id === data.id ? { ...item, salary: item.salary + 1 } : item
    );
    setCurrent(updatedData);
  };

  // Function to decrement salary
  const Decrementsalary = (data) => {
    const updatedData = current.map(item => 
      item.id === data.id ? { ...item, salary: item.salary - 1 } : item
    );
    setCurrent(updatedData);
  };

  return (
    <div>
      {
        current.map(value => (
          <React.Fragment key={value.id}>
            <h2>{value.name}</h2>
            <h2>{value.salary}</h2>
            <button onClick={() => Incrementsalary(value)}>Increment salary</button>
            <button onClick={() => Decrementsalary(value)}>Decrement salary</button>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default UseStateExample2;
