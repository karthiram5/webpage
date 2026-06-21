// ─── WelcomeSplash Component ─────────────────────────────────────────────────
// Full-screen animated welcome intro. Fades out after ~3.6 s then unmounts.

(function () {
  const { useEffect, useState } = React;

  function WelcomeSplash({ onDone }) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
      // Bar animation: delay 1.2s, duration 1.5s → count 0→100 in that window
      const startDelay = setTimeout(() => {
        const total = 1500;  // ms
        const steps = 100;
        const interval = total / steps;
        let current = 0;
        const counter = setInterval(() => {
          current += 1;
          setPercent(current);
          if (current >= steps) clearInterval(counter);
        }, interval);
      }, 1200);

      const exitTimer = setTimeout(onDone, 4200);
      return () => {
        clearTimeout(startDelay);
        clearTimeout(exitTimer);
      };
    }, [onDone]);

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
          <p className="splash-percent">{percent}%</p>
        </div>
      </div>
    );
  }

  window.WelcomeSplash = WelcomeSplash;
})();
