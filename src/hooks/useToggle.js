import { useState } from "react";
export default function useToggle(initial = false) {
  const [val, setVal] = useState(initial);
  return [val, () => setVal(v => !v)];
}
