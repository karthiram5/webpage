// ─── Projects Component ──────────────────────────────────────────────────────

(function () {
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
              </div>
              <p>{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  window.Projects = Projects;
})();
