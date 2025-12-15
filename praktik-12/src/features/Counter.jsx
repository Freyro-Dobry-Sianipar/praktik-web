import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  reset
} from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(0);

  const handleIncrementByAmount = () => {
    const num = Number(amount);
    if (!isNaN(num)) {
      dispatch(incrementByAmount(num));
      setAmount(0);
    }
  };

  return (
    <div className="counter">
      <h2>Redux Toolkit Counter</h2>
      <p>Current count: <strong>{count}</strong></p>

      <div className="buttons">
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={handleIncrementByAmount}>Add Amount</button>
      </div>
    </div>
  );
}

export default Counter;