// ─── Footer Component ────────────────────────────────────────────────────────

(function () {
  const { useState, useEffect } = React;

  function Footer() {
    const [visitors, setVisitors] = useState(null);

    useEffect(() => {
      fetch('https://counterapi.dev/api/karthikeyanr-portfolio/visits/hit')
        .then(r => r.json())
        .then(d => { if (d && d.count != null) setVisitors(d.count); })
        .catch(() => {});
    }, []);

    return (
      <footer>
        <div className="footer-inner">
          <span>&copy; 2026 Karthikeyan Ramalingam</span>
          {visitors !== null && (
            <span className="visitor-count">
              👁 {visitors.toLocaleString()} visits
            </span>
          )}
        </div>
      </footer>
    );
  }

  window.Footer = Footer;
})();
