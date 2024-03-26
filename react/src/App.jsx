import {Counter} from "./components/base";
import {CounterBadCode} from "./components/base/Counter/CounterBadCode";

import "./App.css";

export const App = () => {
  return (
    <>
      <Counter />
      <CounterBadCode />
    </>
  );
};
