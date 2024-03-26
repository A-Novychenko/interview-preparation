import {useState} from "react";

import {CounterView, CounterButton} from "../../ui";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCounter = () => {
    setCount((count) => count - 1);
  };

  const incrementCounter = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>

      <CounterView count={count} />

      <CounterButton action={decrementCounter}>-</CounterButton>

      <CounterButton action={incrementCounter}>+</CounterButton>
    </div>
  );
};
