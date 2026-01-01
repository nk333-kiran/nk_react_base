import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [num, setNum] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <>
      <h3>useMemo</h3>
      <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
      <p>Memoizes expensive calculation.</p>
      {/* <button onClick={() => setNum(num + 1)}>Number: {num}</button> */}
      <h4>Square: {square}</h4>
    </>
  );
}
