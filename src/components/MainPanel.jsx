import UseStateDemo from "../labs/UseStateDemo";
import UseEffectDemo from "../labs/UseEffectDemo";
import UseRefDemo from "../labs/UseRefDemo";
import UseIdDemo from "../labs/UseIdDemo";
import UseMemoDemo from "../labs/UseMemoDemo";
import UseCallbackDemo from "../labs/UseCallbackDemo";
import UseContextDemo from "../labs/UseContextDemo";
import UseReducerDemo from "../labs/UseReducerDemo";
import UseToggleDemo from "../labs/UseToggleDemo";
import UseInputDemo from "../labs/UseInputDemo";
import UseDebounceDemo from "../labs/UseDebounceDemo";
import UsePreviousDemo from "../labs/UsePreviousDemo";

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
