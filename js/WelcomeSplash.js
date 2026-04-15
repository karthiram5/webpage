// ─── WelcomeSplash Component ─────────────────────────────────────────────────
// Full-screen animated welcome intro. Fades out after ~3.6 s then unmounts.

(function () {
  const { useEffect } = React;

  function WelcomeSplash({ onDone }) {
    useEffect(() => {
      const timer = setTimeout(onDone, 4200);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="splash">
        <div className="splash-inner">
          <p className="splash-sub">Welcome to</p>
          <h1 className="splash-heading">My Portfolio</h1>
          <p className="splash-name">
            Karthikeyan Ramalingam <span className="splash-dot">·</span> Full Stack Developer
          </p>
          <div className="splash-bar-wrap">
            <div className="splash-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  window.WelcomeSplash = WelcomeSplash;
})();
