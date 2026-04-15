// ─── App Root ────────────────────────────────────────────────────────────────
// Composes all components and mounts to #root.

(function () {
  const { useState } = React;

  function App() {
    const [splashDone, setSplashDone] = useState(false);
    return (
      <>
        {!splashDone && <WelcomeSplash onDone={() => setSplashDone(true)} />}
        <ThreeBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
