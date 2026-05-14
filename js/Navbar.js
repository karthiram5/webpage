// ─── Navbar Component ────────────────────────────────────────────────────────

(function () {
  const { useState, useEffect, useRef } = React;

  function Navbar() {
    const [active, setActive] = useState('home');
    const navRef              = useRef(null);

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

      const nav = navRef.current;
      const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        observers.forEach(o => o.disconnect());
        window.removeEventListener('scroll', onScroll);
      };
    }, []);

    const scrollTo = (id) => {
      const el = document.getElementById(id.toLowerCase());
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <nav ref={navRef} className="nav">
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
