import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const handleIncrement = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      {count === maxLimit && (
        <p style={{ color: "red", fontWeight: "bold" }}>Maximum limit reached</p>
      )}
      <div>
        <button onClick={handleDecrement} style={{ marginRight: "10px" }}>
          Decrement
        </button>
        <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
