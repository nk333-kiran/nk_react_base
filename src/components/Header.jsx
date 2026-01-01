export default function Header({ search, setSearch, toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>☰</button>
        <h2>React Hooks Interactive Lab</h2>
      </div>

      <input
        placeholder="Search hooks..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </header>
  );
}
