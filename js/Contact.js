// ─── Contact Component ───────────────────────────────────────────────────────

(function () {
  function Contact() {
    return (
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrap">
          <div className="contact-card">
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something great. Feel free to reach out!
            </p>
            <div className="contact-links">
              <a
                className="contact-link li"
                href="https://www.linkedin.com/in/karthikeyan-ramalingam-a7b9a6344"
                target="_blank"
                rel="noreferrer"
              >
                🔗 LinkedIn
              </a>
              <a className="contact-link em" href="mailto:karthikeyan@example.com">
                ✉️ Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.Contact = Contact;
})();
