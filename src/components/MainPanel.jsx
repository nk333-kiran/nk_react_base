import UseStateDemo from "../labs/Day1/UseStateDemo";
import UseEffectDemo from "../labs/Day1/UseEffectDemo";
import UseRefDemo from "../labs/Day1/UseRefDemo";
import UseIdDemo from "../labs/Day1/UseIdDemo";
import UseMemoDemo from "../labs/Day2/UseMemoDemo";
import UseCallbackDemo from "../labs/Day2/UseCallbackDemo";
import UseContextDemo from "../labs/Day2/UseContextDemo";
import UseReducerDemo from "../labs/Day2/UseReducerDemo";
import UseToggleDemo from "../labs/Day3/UseToggleDemo";
import UseInputDemo from "../labs/Day3/UseInputDemo";
import UseDebounceDemo from "../labs/Day3/UseDebounceDemo";
import UsePreviousDemo from "../labs/Day3/UsePreviousDemo";

const map = {
  useState: <UseStateDemo />,
  useEffect: <UseEffectDemo />,
  useRef: <UseRefDemo />,
  useId: <UseIdDemo />,
  useMemo: <UseMemoDemo />,
  useCallback: <UseCallbackDemo />,
  useContext: <UseContextDemo />,
  useReducer: <UseReducerDemo />,
  useToggle: <UseToggleDemo />,
  useInput: <UseInputDemo />,
  useDebounce: <UseDebounceDemo />,
  usePrevious: <UsePreviousDemo />
};

export default function MainPanel({ selected }) {
  return (
    <main className="main">
      <section className="learning-panel">
        {map[selected]}
      </section>
    </main>
  );
}
