// ─── Skills Components ───────────────────────────────────────────────────────

(function () {
  const { useEffect, useRef } = React;

  function SkillCard({ icon, label, pct }) {
    const cardRef = useRef(null);
    const barRef  = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = pct + '%';
          observer.disconnect();
        }
      }, { threshold: 0.3 });

      if (cardRef.current) observer.observe(cardRef.current);
      return () => observer.disconnect();
    }, [pct]);

    return (
      <div className="skill-card" ref={cardRef}>
        <div className="skill-icon">{icon}</div>
        <h4>{label}</h4>
        <div className="bar-bg">
          <div className="bar" ref={barRef} style={{ width: 0 }}></div>
        </div>
        <span className="skill-pct">{pct}%</span>
      </div>
    );
  }

  function Skills() {
    // Build ordered unique category list
    const categories = [];
    SKILLS.forEach(s => {
      if (!categories.includes(s.category)) categories.push(s.category);
    });

    return (
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        {categories.map(cat => (
          <div className="skill-partition" key={cat}>
            <div className="skill-partition-header">
              <span className="skill-partition-label">{cat}</span>
            </div>
            <div className="skills-grid">
              {SKILLS.filter(s => s.category === cat).map(s => (
                <SkillCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }

  window.SkillCard = SkillCard;
  window.Skills    = Skills;
})();

