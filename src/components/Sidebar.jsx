const hooks = [
  { day: "Day 1", items: ["useState", "useEffect", "useRef", "useId"] },
  { day: "Day 2", items: ["useMemo", "useCallback", "useContext", "useReducer"] },
  { day: "Day 3", items: ["useToggle", "useInput", "useDebounce", "usePrevious"] }
];

export default function Sidebar({ onSelect, selected, search, open, close }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {hooks.map(section => (
        <div key={section.day}>
          <h4>{section.day}</h4>
          {section.items
            .filter(h => h.toLowerCase().includes(search.toLowerCase()))
            .map(hook => (
              <button
                key={hook}
                className={selected === hook ? "active" : ""}
                onClick={() => {
                  onSelect(hook);
                  close();
                }}
              >
                {hook}
              </button>
            ))}
        </div>
      ))}
    </aside>
  );
}
