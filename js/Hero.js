// ─── Hero Component ──────────────────────────────────────────────────────────

(function () {
  const { useState, useEffect } = React;

  function useTypewriter(text, startDelay) {
    const [display, setDisplay] = useState('');
    const [done, setDone] = useState(false);
    useEffect(() => {
      var i = 0, iv, t;
      t = setTimeout(function () {
        iv = setInterval(function () {
          i++;
          setDisplay(text.slice(0, i));
          if (i >= text.length) { clearInterval(iv); setDone(true); }
        }, 110);
      }, startDelay);
      return function () { clearTimeout(t); clearInterval(iv); };
    }, []);
    return { display, done };
  }

  function RobotSVG() {
    return (
      <svg className="ai-robot" viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6a8fff" />
            <stop offset="100%" stopColor="#bf9aff" />
          </linearGradient>
          <filter id="eg" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bodyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Subtle outer glow behind robot body */}
        <ellipse cx="80" cy="140" rx="52" ry="46" fill="#6a8fff" opacity="0.07" filter="url(#bodyGlow)" />

        {/* Antenna */}
        <line x1="80" y1="18" x2="80" y2="35" stroke="#6a8fff" strokeWidth="2.5" strokeLinecap="round"/>
        <circle className="robot-antenna-ball" cx="80" cy="13" r="6" fill="url(#rg)" filter="url(#eg)"/>

        {/* Head */}
        <rect x="44" y="35" width="72" height="56" rx="14" fill="url(#rg)" opacity="0.9"/>

        {/* Eyes */}
        <rect className="robot-eye" x="56" y="52" width="16" height="14" rx="4" fill="#050510" filter="url(#eg)"/>
        <rect className="robot-eye" x="88" y="52" width="16" height="14" rx="4" fill="#050510" filter="url(#eg)"/>
        <circle cx="64" cy="59" r="4" fill="#6a8fff"/>
        <circle cx="96" cy="59" r="4" fill="#6a8fff"/>

        {/* Mouth pixels */}
        <rect x="62" y="74" width="5" height="5" rx="1" fill="#050510" opacity="0.7"/>
        <rect x="70" y="74" width="5" height="5" rx="1" fill="#050510" opacity="0.7"/>
        <rect x="78" y="74" width="5" height="5" rx="1" fill="#050510" opacity="0.7"/>
        <rect x="86" y="74" width="5" height="5" rx="1" fill="#050510" opacity="0.7"/>
        <rect x="94" y="74" width="5" height="5" rx="1" fill="#050510" opacity="0.7"/>

        {/* Neck connectors */}
        <rect x="72" y="91" width="7" height="8" rx="2" fill="#6a8fff" opacity="0.6"/>
        <rect x="81" y="91" width="7" height="8" rx="2" fill="#bf9aff" opacity="0.6"/>

        {/* Body */}
        <rect x="30" y="99" width="100" height="72" rx="18" fill="url(#rg)" opacity="0.85"/>

        {/* Power button */}
        <circle className="robot-power" cx="80" cy="128" r="11" fill="#050510" opacity="0.8"/>
        <circle className="robot-power" cx="80" cy="128" r="6" fill="url(#rg)" filter="url(#eg)"/>
        <line x1="80" y1="122" x2="80" y2="128" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Circuit traces */}
        <line x1="44" y1="115" x2="60" y2="115" stroke="#fff" strokeWidth="1" opacity="0.3"/>
        <line x1="44" y1="120" x2="55" y2="120" stroke="#fff" strokeWidth="1" opacity="0.3"/>
        <line x1="100" y1="115" x2="116" y2="115" stroke="#fff" strokeWidth="1" opacity="0.3"/>
        <line x1="105" y1="120" x2="116" y2="120" stroke="#fff" strokeWidth="1" opacity="0.3"/>

        {/* Arms */}
        <rect x="10" y="102" width="22" height="52" rx="11" fill="url(#rg)" opacity="0.8"/>
        <rect x="128" y="102" width="22" height="52" rx="11" fill="url(#rg)" opacity="0.8"/>

        {/* Hands */}
        <circle cx="21" cy="162" r="9" fill="url(#rg)" opacity="0.9"/>
        <circle cx="139" cy="162" r="9" fill="url(#rg)" opacity="0.9"/>

        {/* Legs */}
        <rect x="52" y="171" width="22" height="24" rx="8" fill="url(#rg)" opacity="0.8"/>
        <rect x="86" y="171" width="22" height="24" rx="8" fill="url(#rg)" opacity="0.8"/>

        {/* Feet */}
        <rect x="46" y="192" width="32" height="8" rx="4" fill="#bf9aff" opacity="0.7"/>
        <rect x="82" y="192" width="32" height="8" rx="4" fill="#bf9aff" opacity="0.7"/>
      </svg>
    );
  }

  function calcYearsExp() {
    var start = new Date('2021-06-01');
    var now = new Date();
    var months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    return Math.floor(months / 12) + '+';
  }

  function Hero() {
    const [greeting, setGreeting] = useState(false);
    const { display: twName, done: twDone } = useTypewriter('Karthikeyan Ramalingam', 4300);

    useEffect(() => {
      const show = setTimeout(() => setGreeting(true), 4400);
      const hide = setTimeout(() => setGreeting(false), 9600);
      return () => { clearTimeout(show); clearTimeout(hide); };
    }, []);

    const scrollToContact    = e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); };
    const scrollToExperience = e => { e.preventDefault(); document.getElementById('experience').scrollIntoView({ behavior: 'smooth' }); };

    return (
      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="robot-wrap">
            {/* Decorative orbit rings */}
            <div className="robot-orbit"></div>
            <div className="robot-orbit-2"></div>
            {greeting && (
              <div className="robot-bubble">
                👋 Hi! Thank you for visiting!
              </div>
            )}
            <RobotSVG />
          </div>
          <div className="hero-text">
            <h1 className={twDone ? 'tw-done' : ''}>{twName || ' '}</h1>
            <div className={twDone ? 'hero-sub hero-sub--visible' : 'hero-sub'}>
              <p className="tagline">Full Stack Developer</p>
              <p className="bio">
                Passionate Software Engineer with {calcYearsExp()} years of experience building robust,
                scalable web applications. Specialized in .NET and Node.js ecosystems,
                delivering end-to-end solutions from database to UI.
              </p>
              <div className="btn-group">
                <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
                  Get In Touch
                </a>
                <a href="#experience" className="btn btn-outline" onClick={scrollToExperience}>
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="scroll-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <span>scroll</span>
        </div>
      </section>
    );
  }

  window.Hero = Hero;
})();
