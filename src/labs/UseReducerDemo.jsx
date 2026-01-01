import { useReducer } from "react";

function reducer(state, action) {
  if (action === "inc") return state + 1;
  if (action === "dec") return state - 1;
  return state;
}

export default function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h3>useReducer</h3>
      <button onClick={() => dispatch("inc")}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch("dec")}>-</button>
    </>
  );
}
