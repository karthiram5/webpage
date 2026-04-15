// ─── Education Component ─────────────────────────────────────────────────────

(function () {
  function Education() {
    return (
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="edu-grid">
          {EDUCATION.map((ed, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">{ed.icon}</div>
              <h3>{ed.degree}</h3>
              <div className="edu-inst">{ed.institution}</div>
              <p>{ed.desc}</p>
              <span className="edu-badge">{ed.badge}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  window.Education = Education;
})();
