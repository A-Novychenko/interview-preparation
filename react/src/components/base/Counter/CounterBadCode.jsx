import {CounterView, CounterButton} from "../../ui";
import {useState} from "react";
export const CounterBadCode = () => {
  const [x, setX] = useState(0);
  const adds = () => {
    setX((count) => count - 1);
  };
  const subtracts = () => {
    setX((count) => count + 1);
  };
  return (
    <div>
      <h2>Counter</h2>
      <CounterView count={x} />
      <CounterButton action={subtracts}>-</CounterButton>
      <CounterButton action={adds}>+</CounterButton>
    </div>
  );
};
