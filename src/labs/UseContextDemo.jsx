import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function UseContextDemo() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h4>Theme: {theme}</h4>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setSelected("chill")}>chill</button>
        <button onClick={() => setSelected("hook")}>hook</button>
        <button onClick={() => setSelected("focus")}>focus</button>
      </div>
      <p style={{ marginTop: 8 }}>Selected: {selected || "None"}</p>
    </div>
  );
}
