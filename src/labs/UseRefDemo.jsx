import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();

  return (
    <>
      <h3>useRef</h3>
      <p>Access DOM without re-render.</p>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
