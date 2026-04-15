// ─── Navbar Component ────────────────────────────────────────────────────────

(function () {
  const { useState, useEffect } = React;

  function Navbar() {
    const [active, setActive] = useState('home');

    useEffect(() => {
      const observers = [];
      NAV_LINKS.forEach(l => {
        const el = document.getElementById(l.toLowerCase());
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setActive(l.toLowerCase());
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
        obs.observe(el);
        observers.push(obs);
      });
      return () => observers.forEach(o => o.disconnect());
    }, []);

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
                className={active === l.toLowerCase() ? 'active' : ''}
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
