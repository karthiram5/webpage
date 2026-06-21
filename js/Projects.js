// ─── Projects Component ──────────────────────────────────────────────────────

(function () {
  const { useState } = React;

  function TermsGlossary({ terms }) {
    const [open, setOpen] = useState(false);
    return (
      <div className="pps-terms">
        <button className="pps-terms-toggle" onClick={() => setOpen(o => !o)}>
          <span>Platform Terminology</span>
          <span className={`pps-chevron${open ? ' pps-chevron--open' : ''}`}>▾</span>
        </button>
        {open && (
          <ul className="pps-terms-list">
            {terms.map(t => (
              <li key={t.abbr}>
                <span className="pps-term-abbr">{t.abbr}</span>
                <span className="pps-term-label">{t.label}</span>
                <span className="pps-term-def">{t.def}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  function ConnectedApps({ apps }) {
    return (
      <div className="sso-apps">
        <span className="sso-apps-label">Connected Apps</span>
        <div className="sso-apps-list">
          {apps.map(app => (
            <div className="sso-app-badge" key={app.code} title={app.desc}>
              <span className="sso-app-code">{app.code}</span>
              <span className="sso-app-name">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Projects() {
    return (
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.code}>
              <div className="project-top">
                <span className="project-code">{project.code}</span>
                <h3>{project.title}</h3>
                {project.ssoLinked && (
                  <span className="sso-badge" title="Authentication via SSO gateway">🔐 SSO Auth</span>
                )}
                {project.aiPowered && (
                  <span className="ai-badge" title="AI-powered automation">🤖 AI Powered</span>
                )}
              </div>
              <p>{project.desc}</p>
              {project.apps && <ConnectedApps apps={project.apps} />}
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {project.terms && <TermsGlossary terms={project.terms} />}
            </article>
          ))}
        </div>
      </section>
    );
  }

  window.Projects = Projects;
})();
