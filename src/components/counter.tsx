import React, { useState } from "react";
import { Button } from "./button";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  return (
    <div className="counter">
      <Button symbol="-" onClickFunction={decrementCount} />
      {count}
      <Button symbol="+" onClickFunction={incrementCount} />
    </div>
  );
}

export default Counter;
