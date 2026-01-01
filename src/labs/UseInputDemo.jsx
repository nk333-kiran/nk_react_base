import useInput from "../../hooks/useInput";

export default function UseInputDemo() {
  const { val, bind } = useInput();
  return (
    <>
      Name <input {...bind} />
      <p>{val}</p>
    </>
  );
}
