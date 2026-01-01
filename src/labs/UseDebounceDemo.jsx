import { useState } from "react";
import useDebounce from "../../hooks/useDebounceDemo";

export default function UseDebounceDemo() {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 500);

  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <p>Debounced: {debounced}</p>
    </>
  );
}
