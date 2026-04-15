// ─── About Component ─────────────────────────────────────────────────────────

(function () {
  function calcYearsExp() {
    var start = new Date('2021-06-01');
    var now = new Date();
    var yrs = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    return Math.floor(yrs / 12) + '+ Years';
  }

  function About() {
    return (
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="card">
            <h3>Who I Am</h3>
            <p>
              I'm a dedicated Full Stack Developer with hands-on experience in both
              front-end and back-end technologies. My dual background in Engineering
              (Electronics &amp; Communication) and an MBA in Systems Management gives
              me a unique perspective on technical and business challenges.
            </p>
          </div>
          <div className="card">
            <h3>Quick Info</h3>
            <ul className="info-list">
              <li><span className="lbl">Name</span>Karthikeyan Ramalingam</li>
              <li><span className="lbl">Role</span>Full Stack Developer</li>
              <li><span className="lbl">Stack</span>.NET &amp; Node.js</li>
              <li><span className="lbl">Experience</span>{calcYearsExp()}</li>
              <li><span className="lbl">Location</span>Kanchipuram, Tamil Nadu, India</li>
              <li>
                <span className="lbl">LinkedIn</span>
                <a href="https://www.linkedin.com/in/karthikeyan-ramalingam-a7b9a6344" target="_blank" rel="noreferrer">
                  linkedin.com/in/karthikeyan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  window.About = About;
})();
