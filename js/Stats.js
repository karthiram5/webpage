// ─── Stats Counter Section ────────────────────────────────────────────────────

(function () {
  const { useEffect, useRef, useState } = React;

  // Derive exact values from the shared data arrays in data.js
  function calcYearsNum() {
    var start = new Date('2021-06-01');
    var now   = new Date();
    var months = (now.getFullYear() - start.getFullYear()) * 12
               + (now.getMonth() - start.getMonth());
    return Math.floor(months / 12);
  }

  function buildStats() {
    return [
      { end: calcYearsNum(),        suffix: '+', label: 'Years Experience',   icon: '🚀' },
      { end: SKILLS.length,         suffix: '+', label: 'Skills & Technologies', icon: '⚡' },
      { end: PROJECTS.length,       suffix: '',  label: 'Projects Delivered', icon: '🏆' },
      { end: EDUCATION.length,      suffix: '',  label: 'Degrees Earned',     icon: '🎓' },
    ];
  }

  function Counter({ end, suffix, label, icon, active }) {
    const [count, setCount] = useState(0);
    const raf = useRef(null);

    useEffect(() => {
      if (!active) return;
      const duration = 1800;
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.floor(eased * end));
        if (progress < 1) raf.current = requestAnimationFrame(tick);
        else setCount(end);
      };

      raf.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf.current);
    }, [active, end]);

    return (
      <div className="stat-card">
        <span className="stat-icon">{icon}</span>
        <div className="stat-number">
          {count}<span className="stat-suffix">{suffix}</span>
        </div>
        <div className="stat-label">{label}</div>
      </div>
    );
  }

  function Stats() {
    const [active, setActive] = useState(false);
    const ref = useRef(null);
    const stats = buildStats();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div className="stats-strip" ref={ref}>
        {stats.map((s) => (
          <Counter key={s.label} {...s} active={active} />
        ))}
      </div>
    );
  }

  window.Stats = Stats;
})();
