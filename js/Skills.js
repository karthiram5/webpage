// ─── Skills Components ───────────────────────────────────────────────────────

(function () {
  function SkillCard({ icon, label }) {
    const isImg   = typeof icon === 'string' && (icon.startsWith('https') || icon.startsWith('data:'));

    return (
      <div className="skill-card">
        <div className="skill-icon">
          {isImg
            ? <img src={icon} alt={label} style={{ width: '2.2rem', height: '2.2rem', objectFit: 'contain' }} />
            : icon
          }
        </div>
        <h4>{label}</h4>
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

