// ─── Experience Component ────────────────────────────────────────────────────

(function () {
  function formatPeriod(start, end) {
    var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var s = new Date(start + '-01');
    var e = end ? new Date(end + '-01') : new Date();
    var label = MONTHS[s.getMonth()] + ' ' + s.getFullYear() +
                ' – ' + (end ? MONTHS[e.getMonth()] + ' ' + e.getFullYear() : 'Present');
    var totalMonths = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    var yrs = Math.floor(totalMonths / 12);
    var mos = totalMonths % 12;
    var dur = '';
    if (yrs > 0) dur += yrs + ' yr' + (yrs > 1 ? 's' : '');
    if (mos > 0) dur += (dur ? ' ' : '') + mos + ' mo' + (mos > 1 ? 's' : '');
    return label + (dur ? ' · ' + dur : '');
  }

  function Experience() {
    return (
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dot"></div>
              <div className="tl-card">
                <h3>{job.role}</h3>
                <div className="tl-company">{job.company}</div>
                <span className="tl-period">{formatPeriod(job.start, job.end)}</span>
                <p>{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  window.Experience = Experience;
})();
