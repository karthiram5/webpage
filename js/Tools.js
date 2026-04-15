// ─── Tools Component ──────────────────────────────────────────────────────────

(function () {
  function ToolCard({ icon, name, category }) {
    return (
      <div className="tool-card">
        <div className="tool-icon">{icon}</div>
        <div className="tool-name">{name}</div>
        <span className="tool-category">{category}</span>
      </div>
    );
  }

  function Tools() {
    return (
      <section id="tools" className="section">
        <h2 className="section-title">Tools I Work With</h2>
        <div className="tools-grid">
          {TOOLS.map((t, i) => <ToolCard key={i} {...t} />)}
        </div>
      </section>
    );
  }

  window.ToolCard = ToolCard;
  window.Tools    = Tools;
})();
