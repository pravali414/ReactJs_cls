import React, { useState } from "react";

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Parent Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Parent;
