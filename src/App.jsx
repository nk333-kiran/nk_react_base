import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";

export default function App() {
  const [selected, setSelected] = useState("useState");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        toggleSidebar={() => setOpen(!open)}
      />
      <div className="layout">
        <Sidebar
          selected={selected}
          onSelect={setSelected}
          search={search}
          open={open}
          close={() => setOpen(false)}
        />
        <MainPanel selected={selected} />
      </div>
    </>
  );
}
