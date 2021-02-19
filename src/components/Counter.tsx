import React, { useState, useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" }; // 이렇게 액션을 |으로 연달아서 쭉 나열하세요.

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;

export const CounterState = () => {
  // generic 안써도 알아서 count 타입 추론이 됨.
  // 그럼 언제 generic 쓰는게 좋은가? : null이 될 수도 있을 때
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};
