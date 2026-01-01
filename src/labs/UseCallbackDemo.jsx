import { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <h3>useCallback</h3>
      <p>Prevents function recreation.</p>
      <button onClick={inc}>Count: {count}</button>
    </>
  );
}
