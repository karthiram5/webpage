// ─── App Root ────────────────────────────────────────────────────────────────

(function () {
  const { useState, useEffect } = React;

  function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const isMobile = window.innerWidth <= 600;
        if (isMobile) {
          // On mobile: only show when within 300px of the page bottom
          const nearBottom =
            window.scrollY + window.innerHeight >= document.body.scrollHeight - 300;
          setVisible(nearBottom);
        } else {
          // On desktop: show after scrolling 400px
          setVisible(window.scrollY > 400);
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
      <button
        className={'scroll-top-btn' + (visible ? ' visible' : '')}
        onClick={scrollTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    );
  }

  function App() {
    const [splashDone, setSplashDone] = useState(false);
    return (
      <>
        {!splashDone && <WelcomeSplash onDone={() => setSplashDone(true)} />}
        <ThreeBackground />
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
