// ─── Navbar Component ────────────────────────────────────────────────────────

(function () {
  function Navbar() {
    const scrollTo = (id) => {
      const el = document.getElementById(id.toLowerCase());
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <nav className="nav">
        <div className="nav-logo">KR</div>
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); scrollTo(l); }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  window.Navbar = Navbar;
})();
