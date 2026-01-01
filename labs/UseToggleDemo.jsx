import useToggle from "../../hooks/useToggle";

export default function UseToggleDemo() {
  const [on, toggle] = useToggle();

  return (
    <>
      <h3>useToggle (Custom Hook)</h3>
      <p>Reusable logic for toggling boolean state.</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => !on && toggle()}>show</button>
        <button onClick={() => on && toggle()}>hide</button>
      </div>
      {on && <p>i am visible</p>}
    </>
  );
}
