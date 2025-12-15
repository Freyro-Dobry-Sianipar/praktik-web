import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterDemo() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(10);

  return (
    <div className="counter-demo">
      <div className="counter-group">
        <h3>Counter 1 (Start: 0)</h3>
        <p>Count: {counter1.count}</p>
        <button onClick={counter1.increment}>+</button>
        <button onClick={counter1.decrement}>-</button>
        <button onClick={counter1.reset}>Reset</button>
      </div>

      <div className="counter-group">
        <h3>Counter 2 (Start: 10)</h3>
        <p>Count: {counter2.count}</p>
        <button onClick={counter2.increment}>+</button>
        <button onClick={counter2.decrement}>-</button>
        <button onClick={counter2.reset}>Reset</button>
      </div>

      <p className="demo-note">
        ✅ Same hook logic, different instances with separate state
      </p>
    </div>
  );
}

export default CounterDemo;