import { useState } from "react";
export default function useInput() {
  const [val, setVal] = useState("");
  return { val, bind: { value: val, onChange: e => setVal(e.target.value) } };
}
