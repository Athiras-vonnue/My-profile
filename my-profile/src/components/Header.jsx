// Props: name, tagline, dark, onToggle (a function from App)
function Header(props) {
  // First letter of the name, shown inside the round avatar
  const initial = props.name[0];

  return (
    <header className="header">
      <div className="header-inner">
        <button className="theme-btn" onClick={props.onToggle}>
          {props.dark ? "☀️ Light mode" : "🌙 Dark mode"}
        </button>
        <div className="avatar">{initial}</div>
        <p className="hello">👋 Hello, I'm</p>
        <h1>{props.name}</h1>
        <p className="tagline">{props.tagline}</p>
      </div>
    </header>
  );
}

export default Header;
