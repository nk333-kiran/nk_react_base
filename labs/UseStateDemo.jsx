import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="demo-card">
      <h3>useState</h3>
      <p>Manages local component state.</p>

      <div className="demo-section">
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>

      <div className="demo-section">
        <input
          placeholder="Type something..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <span>{text}</span>
      </div>
    </div>
  );
}
