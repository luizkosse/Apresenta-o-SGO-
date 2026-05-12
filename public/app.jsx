// App orchestrator — state, theme, density, reveal observer
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply theme + density to <html>
  useEffectApp(() => {
    document.documentElement.dataset.theme = t.theme;
    document.documentElement.dataset.density = t.density;
  }, [t.theme, t.density]);

  // reveal-on-scroll observer
  useEffectApp(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav theme={t.theme} setTheme={(v) => setTweak('theme', v)} />
      <main>
        <Hero />
        <Shift />
        <MultiTenancy />
        <RBAC />
        <Features />
        <Benefits />
        <DevStory />
        <Roadmap />
        <CTA />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks" defaultPos={{ right: 24, bottom: 24 }}>
        <TweakSection title="Aparência">
          <TweakRadio
            label="Tema"
            value={t.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
            ]}
          />
          <TweakRadio
            label="Densidade"
            value={t.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'compact', label: 'Compacto' },
              { value: 'comfortable', label: 'Confortável' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
