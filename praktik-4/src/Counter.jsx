import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  // state untuk counter
  const [count, setCount] = useState(0);

  // Handler functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Functional update (recommended)
  const incrementByFive = () => {
    setCount(prevCount => prevCount + 5);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} className="btn btn-decrement">
          -1
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increment} className="btn btn-increment">
          +1
        </button>
        <button onClick={incrementByFive} className="btn btn-increment-five">
          +5
        </button>
      </div>
      <div className="counter-status">
        <p>Status: {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}</p>
        <p>{count % 2 === 0 ? 'Genap' : 'Ganjil'}</p>
      </div>
    </div>
  );
};

export default Counter;
