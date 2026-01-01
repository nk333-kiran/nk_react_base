import { useState } from "react";
import usePrevious from "../../hooks/usePrevious";

export default function UsePreviousDemo() {
  const [n, setN] = useState(0);
  const prev = usePrevious(n);

  return (
    <>
      <button onClick={() => setN(n + 1)}>Current: {n}</button>
      <p>Previous: {prev}</p>
    </>
  );
}
