import { useState } from "react";
import classes from "./styles.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={classes.increment}>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
