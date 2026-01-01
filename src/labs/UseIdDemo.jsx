import { useId } from "react";

export default function UseIdDemo() {
  const id = useId();
  return (
    <>
      <h3>useId</h3>
      <label htmlFor={id}>Email</label>
      <input id={id} />
    </>
  );
}
