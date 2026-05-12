// Hero, Nav, Shift sections
const { useState, useEffect, useRef } = React;

// ===== Logo =====
function LogoSGO({ withVersion = true }) {
  return (
    <a href="#top" className="logo-sgo" aria-label="SGO">
      <span className="logo-sgo-mark" aria-hidden="true"></span>
      <span>SGO</span>
      {withVersion && <span className="logo-sgo-version">v2</span>}
    </a>
  );
}

function ZelloMark() {
  return (
    <span className="zello-mark">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span>por</span>
      <span>Zello</span>
    </span>
  );
}

// ===== Nav =====
function Nav({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Principal">
      <LogoSGO />
      <div className="nav-links">
        <a className="nav-link" href="#shift">A virada</a>
        <a className="nav-link" href="#tenancy">Multi-tenant</a>
        <a className="nav-link" href="#permissions">Permissões</a>
        <a className="nav-link" href="#features">Funcionalidades</a>
        <a className="nav-link" href="#benefits">Benefícios</a>
        <a className="nav-link" href="#roadmap">Roadmap</a>
      </div>
      <div className="nav-actions">
        <button
          className="icon-btn"
          aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
          )}
        </button>
        <a href="https://sgo.zello.space/login" target="_blank" rel="noopener" className="btn btn-primary" style={{ height: 36, padding: '0 14px', fontSize: 13 }}>
          Vamos lá?
        </a>
      </div>
    </nav>
  );
}

// ===== Hero =====
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-badge reveal in">
            <span className="hero-badge-tag">v2 · 2026</span>
            <span>Reconstruída do zero, feita em casa pela Zello</span>
          </div>
          <h1 className="reveal in">
            Uma plataforma. Múltiplas organizações.<br/>
            <span className="accent-word">Operação no controle.</span>
          </h1>
          <p className="hero-sub reveal in">
            O SGO deixou de ser uma ferramenta operacional limitada para se tornar a plataforma da Zello — feita em casa, pensada para cobrir tudo que a operação precisar, com permissões granulares, auditoria nativa e operação em tempo real.
          </p>
          <div className="hero-cta reveal in">
            <a href="https://sgo.zello.space/login" target="_blank" rel="noopener" className="btn btn-primary">
              Vamos lá?
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#tenancy" className="btn btn-ghost">
              Conhecer a arquitetura
            </a>
          </div>

          <HeroMockup />
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="hero-mock-wrap reveal" data-stagger="200">
      <div className="hero-mock-bar">
        <i></i><i></i><i></i>
        <span className="url">app.sgo.zello.tec.br/org/zello/clients</span>
      </div>
      <MockTenants />
    </div>
  );
}

// ===== Platform overview mockup: multiple Organizations, each with Clients =====
function MockTenants() {
  const orgs = [
    {
      id: 'ops', name: 'Diretoria de Operação', short: 'DOP', code: 'OP',
      role: 'ADMIN',
      stats: { clients: 4, members: 38, projects: 17 },
      grad: 'linear-gradient(135deg, #F4694D, #BA4732)',
      clients: [
        { code: 'ACM', name: 'Acme Corp',      members: 14, on: 3 },
        { code: 'GBX', name: 'Globex',         members: 9,  on: 1 },
        { code: 'INI', name: 'Initech',        members: 6,  on: 0 },
        { code: 'UMB', name: 'Umbrella',       members: 9,  on: 2 },
      ],
    },
    {
      id: 'prd', name: 'Diretoria de Produtos', short: 'DPR', code: 'PR',
      role: 'MEMBER',
      stats: { clients: 3, members: 22, projects: 9 },
      grad: 'linear-gradient(135deg, #1EC7AF, #127D6F)',
      clients: [
        { code: 'VTX', name: 'Vertex',         members: 11, on: 4 },
        { code: 'LMN', name: 'Lumen Labs',     members: 7,  on: 2 },
        { code: 'NMB', name: 'Nimbus',         members: 4,  on: 0 },
      ],
    },
  ];

  return (
    <div className="mock-tenants">
      <style>{`
        .mock-tenants {
          position: absolute;
          inset: 32px 0 0;
          padding: 52px 36px 28px;
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: 14px;
          font-family: 'Inter', sans-serif;
        }
        .mt-pageh {
          display: flex; align-items: center; gap: 12px;
        }
        .mt-pageh .crumb {
          font-size: 11px;
          color: var(--fg-muted);
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.04em;
        }
        .mt-pageh h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--fg);
          letter-spacing: -0.01em;
        }
        .mt-pageh .right {
          margin-left: auto;
          display: flex; gap: 6px; align-items: center;
        }
        .mt-pageh .chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--surface-2);
          color: var(--fg-muted);
          border: 1px solid var(--border);
        }
        .mt-pageh .chip.acc {
          color: var(--accent);
          background: color-mix(in oklab, var(--accent-500) 10%, transparent);
          border-color: color-mix(in oklab, var(--accent-500) 22%, transparent);
        }
        .mt-pageh .chip.acc::before {
          content:''; display:inline-block; width:5px; height:5px; border-radius:50%;
          background: var(--accent); margin-right: 5px; vertical-align: middle;
          box-shadow: 0 0 0 2px color-mix(in oklab, var(--accent-500) 25%, transparent);
        }

        .mt-orgs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          min-height: 0;
        }
        .mt-org {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          overflow: hidden;
          transition: all 200ms ease;
        }
        .mt-org::before {
          content:'';
          position: absolute;
          inset: 0 0 auto 0;
          height: 80px;
          opacity: 0.07;
          pointer-events: none;
        }
        .mt-org.ops::before { background: var(--grad); }
        .mt-org-head {
          display: flex; align-items: center; gap: 10px;
          position: relative;
        }
        .mt-org-logo {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: grid; place-items: center;
          color: white;
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .mt-org-name {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: var(--fg);
          letter-spacing: -0.01em;
        }
        .mt-org-meta {
          font-size: 10.5px;
          font-family: 'JetBrains Mono', monospace;
          color: var(--fg-muted);
          letter-spacing: 0.04em;
          margin-top: 1px;
        }
        .mt-role-pill {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          padding: 3px 7px;
          border-radius: 4px;
          letter-spacing: 0.06em;
          font-weight: 600;
        }
        .mt-role-pill.ADMIN { color: var(--brand-400); background: color-mix(in oklab, var(--brand-500) 16%, transparent); }
        .mt-role-pill.MEMBER { color: var(--accent); background: color-mix(in oklab, var(--accent-500) 14%, transparent); }

        .mt-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .mt-stat {
          padding: 8px 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
        }
        .mt-stat .v {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--fg);
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .mt-stat .l {
          font-size: 9.5px;
          color: var(--fg-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
          font-family: 'JetBrains Mono', monospace;
        }

        .mt-clihead {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 9.5px;
          color: var(--fg-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: 'JetBrains Mono', monospace;
          padding-top: 4px;
          border-top: 1px dashed var(--border);
          margin-top: 2px;
        }
        .mt-clihead .more { color: var(--fg-soft); }

        .mt-clilist {
          display: flex; flex-direction: column;
          gap: 4px;
          flex: 1;
          min-height: 0;
        }
        .mt-cli {
          display: grid;
          grid-template-columns: 24px 1fr auto auto;
          gap: 10px;
          align-items: center;
          padding: 6px 8px;
          border-radius: 6px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .mt-cli-badge {
          width: 24px; height: 24px;
          border-radius: 5px;
          background: var(--surface-2);
          color: var(--fg-soft);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 9px;
          display: grid; place-items: center;
        }
        .mt-cli-name {
          font-size: 11.5px;
          font-weight: 500;
          color: var(--fg);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .mt-cli-mem {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: var(--fg-muted);
        }
        .mt-cli-on {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          padding: 1.5px 5px;
          border-radius: 999px;
          background: var(--surface-2);
          color: var(--fg-muted);
          min-width: 36px;
          text-align: center;
        }
        .mt-cli-on.live {
          color: var(--accent);
          background: color-mix(in oklab, var(--accent-500) 12%, transparent);
        }
        .mt-cli-on.live::before {
          content:''; display:inline-block; width:5px; height:5px; border-radius:50%;
          background: var(--accent); margin-right: 4px; vertical-align: middle;
        }

        .mt-strip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--fg-muted);
        }
        .mt-strip .k { color: var(--fg-muted); }
        .mt-strip .v { color: var(--fg); }
        .mt-strip .sep { color: var(--fg-dim); margin: 0 4px; }
        .mt-strip .right { margin-left: auto; color: var(--fg-soft); }
        .mt-strip .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent-500);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent-500) 22%, transparent);
        }

        @media (max-width: 760px) {
          .mock-tenants { padding: 52px 16px 16px; }
          .mt-orgs { grid-template-columns: 1fr; }
        }
        /* sidebar — org tree */
        .mt-side {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .mt-orgswitch {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px;
          background: var(--surface-2);
          border-radius: 6px;
          margin-bottom: 6px;
          border: 1px solid var(--border);
        }
        .mt-orgswitch .logo {
          width: 22px; height: 22px;
          border-radius: 5px;
          background: linear-gradient(135deg, var(--brand-500), var(--brand-700));
          display: grid; place-items: center;
          color: white;
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 10px;
        }
        .mt-orgswitch .name {
          font-size: 12px; font-weight: 600;
          color: var(--fg);
          flex: 1;
        }
        .mt-orgswitch .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: var(--accent);
          background: color-mix(in oklab, var(--accent-500) 14%, transparent);
          padding: 1.5px 5px;
          border-radius: 3px;
          font-weight: 600;
        }
        .mt-orgswitch .chev {
          width: 12px; height: 12px;
          color: var(--fg-muted);
        }
        .mt-section {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: var(--fg-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 8px 8px 4px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .mt-section .pill {
          background: var(--surface-2);
          padding: 1px 5px;
          border-radius: 999px;
          font-size: 8.5px;
        }
        .mt-cli {
          display: flex; align-items: center; gap: 9px;
          padding: 8px 10px;
          border-radius: 6px;
          cursor: pointer;
          border: 1px solid transparent;
          background: transparent;
          width: 100%;
          text-align: left;
          font-family: inherit;
          color: var(--fg-soft);
          transition: all 160ms ease;
          position: relative;
        }
        .mt-cli:hover { background: var(--surface-2); color: var(--fg); }
        .mt-cli.active {
          background: color-mix(in oklab, var(--brand-500) 10%, transparent);
          border-color: color-mix(in oklab, var(--brand-500) 30%, transparent);
          color: var(--fg);
        }
        .mt-cli.active::before {
          content: '';
          position: absolute;
          left: -1px; top: 25%;
          width: 2px; height: 50%;
          background: var(--brand-500);
          border-radius: 0 2px 2px 0;
        }
        .mt-cli-badge {
          width: 22px; height: 22px;
          border-radius: 5px;
          display: grid; place-items: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          background: var(--surface-2);
          color: var(--fg-soft);
          flex-shrink: 0;
        }
        .mt-cli.active .mt-cli-badge {
          background: color-mix(in oklab, var(--brand-500) 24%, transparent);
          color: var(--brand-400);
        }
        .mt-cli-name {
          font-size: 11.5px; font-weight: 500;
          flex: 1;
          min-width: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mt-cli-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: var(--fg-muted);
        }
        .mt-add {
          margin-top: 4px;
          display: flex; align-items: center; gap: 9px;
          padding: 8px 10px;
          border-radius: 6px;
          color: var(--fg-muted);
          border: 1px dashed var(--border);
          font-size: 11px;
        }

        /* main panel */
        .mt-main {
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: 10px;
          min-width: 0;
        }
        .mt-head {
          display: flex; align-items: center; gap: 12px;
        }
        .mt-crumb {
          font-size: 11px;
          color: var(--fg-muted);
          display: flex; align-items: center; gap: 6px;
        }
        .mt-crumb .sep { color: var(--fg-dim); }
        .mt-crumb .here { color: var(--fg); font-weight: 600; font-size: 13px; font-family: 'Manrope'; }
        .mt-isokey {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          background: color-mix(in oklab, var(--accent-500) 10%, transparent);
          color: var(--accent);
          border: 1px solid color-mix(in oklab, var(--accent-500) 22%, transparent);
        }
        .mt-isokey .k { color: var(--fg-muted); }
        .mt-tabs {
          display: flex; gap: 4px;
        }
        .mt-tab {
          font-size: 10.5px;
          font-family: 'JetBrains Mono', monospace;
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--surface-2);
          color: var(--fg-muted);
          border: 1px solid var(--border);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .mt-tab.act { color: var(--brand-400); background: color-mix(in oklab, var(--brand-500) 12%, transparent); border-color: color-mix(in oklab, var(--brand-500) 25%, transparent); }

        .mt-body {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          overflow: hidden;
        }
        .mt-row-h {
          display: grid;
          grid-template-columns: 24px 1fr 90px 1fr 22px;
          gap: 10px;
          padding: 4px 8px 8px;
          border-bottom: 1px dashed var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: var(--fg-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .mt-row {
          display: grid;
          grid-template-columns: 24px 1fr 90px 1fr 22px;
          gap: 10px;
          padding: 8px;
          align-items: center;
          border-radius: 6px;
          font-size: 11.5px;
          color: var(--fg-soft);
        }
        .mt-row:hover { background: var(--surface-2); }
        .mt-av {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: grid; place-items: center;
          color: white;
          font-weight: 700;
          font-size: 9px;
          font-family: 'Inter', sans-serif;
        }
        .mt-av.a1 { background: var(--brand-500); }
        .mt-av.a2 { background: var(--accent-500); }
        .mt-av.a3 { background: #87C7FF; }
        .mt-name { color: var(--fg); font-weight: 500; font-size: 12px; }
        .mt-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          padding: 2px 6px;
          border-radius: 3px;
          letter-spacing: 0.05em;
          font-weight: 600;
          text-align: center;
          width: fit-content;
        }
        .mt-role.ADMIN { background: color-mix(in oklab, var(--brand-500) 16%, transparent); color: var(--brand-400); }
        .mt-role.MEMBER { background: var(--surface-2); color: var(--fg-soft); }
        .mt-role.GUEST { background: color-mix(in oklab, var(--accent-500) 12%, transparent); color: var(--accent); }
        .mt-perms { display: flex; gap: 4px; flex-wrap: wrap; }
        .mt-perm {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          padding: 2px 5px;
          border-radius: 3px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--fg-muted);
        }
        .mt-perm.on { color: var(--fg-soft); border-color: color-mix(in oklab, var(--brand-500) 25%, transparent); }
        .mt-dotdot {
          color: var(--fg-dim);
          font-size: 12px;
          text-align: center;
        }

        /* footer scope strip */
        .mt-strip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--fg-muted);
        }
        .mt-strip .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent-500);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent-500) 22%, transparent);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        .mt-strip .k { color: var(--fg-muted); }
        .mt-strip .v { color: var(--fg); }
        .mt-strip .sep { color: var(--fg-dim); margin: 0 4px; }
        .mt-strip .right {
          margin-left: auto;
          color: var(--fg-soft);
          font-size: 10px;
        }

        @media (max-width: 760px) {
          .mock-tenants { grid-template-columns: 1fr; padding: 56px 16px 16px; }
          .mt-side { display: none; }
          .mt-row, .mt-row-h { grid-template-columns: 24px 1fr 60px; }
          .mt-row > :nth-child(4), .mt-row > :nth-child(5),
          .mt-row-h > :nth-child(4), .mt-row-h > :nth-child(5) { display: none; }
        }
      `}</style>

      <div className="mt-pageh">
        <span className="crumb">ZELLO</span>
        <span style={{color:'var(--fg-dim)'}}>›</span>
        <h2>Suas organizações</h2>
        <div className="right">
          <span className="chip acc">2 ativas</span>
          <span className="chip">＋ Nova</span>
        </div>
      </div>

      <div className="mt-orgs">
        {orgs.map(o => (
          <div className="mt-org" key={o.id} style={{'--grad': o.grad}}>
            <div className="mt-org-head">
              <span className="mt-org-logo" style={{background: o.grad}}>{o.code}</span>
              <div style={{minWidth: 0}}>
                <div className="mt-org-name">{o.name}</div>
                <div className="mt-org-meta">DIRETORIA · {o.short}</div>
              </div>
              <span className={`mt-role-pill ${o.role}`}>{o.role}</span>
            </div>

            <div className="mt-stats">
              <div className="mt-stat">
                <div className="v">{o.stats.clients}</div>
                <div className="l">Clientes</div>
              </div>
              <div className="mt-stat">
                <div className="v">{o.stats.members}</div>
                <div className="l">Membros</div>
              </div>
              <div className="mt-stat">
                <div className="v">{o.stats.projects}</div>
                <div className="l">Projetos</div>
              </div>
            </div>

            <div className="mt-clihead">
              <span>Clientes</span>
              <span className="more">ver todos →</span>
            </div>

            <div className="mt-clilist">
              {o.clients.map(c => (
                <div className="mt-cli" key={c.code}>
                  <span className="mt-cli-badge">{c.code}</span>
                  <span className="mt-cli-name">{c.name}</span>
                  <span className="mt-cli-mem">{c.members} membros</span>
                  <span className={`mt-cli-on ${c.on > 0 ? 'live' : ''}`}>
                    {c.on > 0 ? `${c.on} on` : '—'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-strip">
        <span className="dot"></span>
        <span>isolamento por <span className="v">orgId</span></span>
        <span className="sep">·</span>
        <span className="k">org_ops_zello</span>
        <span className="sep">·</span>
        <span className="k">org_prod_zello</span>
        <span className="right">cada diretoria, seus clientes, seus membros, sua auditoria</span>
      </div>
    </div>
  );
}

function MockKanban() {
  const cols = [
    { name: 'Backlog', items: [
      { id: 'PRD-014', t: 'Módulo Competências', tag: 'PRD', tone: 'accent' },
      { id: 'TASK-218', t: 'Custom IDs por cliente', tag: 'TASK' },
      { id: 'TASK-219', t: 'Filtros salvos no kanban', tag: 'TASK' },
    ]},
    { name: 'Em andamento', items: [
      { id: 'PRD-012', t: 'WIP aging por etapa', tag: 'PRD', tone: 'accent', live: true },
      { id: 'TASK-201', t: 'Audit log diff visual', tag: 'TASK' },
    ]},
    { name: 'Em revisão', items: [
      { id: 'TASK-194', t: 'OAuth Google org-scoped', tag: 'TASK' },
    ]},
    { name: 'Concluído', items: [
      { id: 'TASK-188', t: 'Migração Mongo concluída', tag: 'DONE', tone: 'done' },
      { id: 'TASK-187', t: 'WebSocket boards ao vivo', tag: 'DONE', tone: 'done' },
    ]},
  ];
  return (
    <div className="mock-kanban">
      <style>{`
        .mock-kanban {
          position: absolute;
          inset: 32px 0 0;
          padding: 56px 36px 36px;
          display: grid;
          grid-template-rows: auto 1fr;
          gap: 18px;
          font-family: 'Inter', sans-serif;
        }
        .mock-kanban-h {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .mock-kanban-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--fg);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mock-kanban-title .crumb {
          color: var(--fg-muted);
          font-weight: 500;
        }
        .mock-kanban-title .sep { color: var(--fg-dim); }
        .mock-kanban-pills {
          display: flex; gap: 6px;
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
        }
        .mock-kanban-pill {
          padding: 4px 8px;
          border-radius: 6px;
          background: var(--surface-2);
          color: var(--fg-muted);
          border: 1px solid var(--border);
        }
        .mock-kanban-pill.live {
          color: var(--accent);
          background: color-mix(in oklab, var(--accent-500) 10%, transparent);
          border-color: color-mix(in oklab, var(--accent-500) 30%, transparent);
        }
        .mock-kanban-pill.live::before {
          content: '';
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          margin-right: 5px;
          vertical-align: middle;
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent-500) 25%, transparent);
        }
        .mock-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          min-height: 0;
        }
        .mock-col {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }
        .mock-col-h {
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--fg-muted);
          padding: 2px 4px 6px;
          border-bottom: 1px dashed var(--border);
        }
        .mock-col-h .count {
          background: var(--surface-2);
          color: var(--fg-soft);
          padding: 1px 6px;
          border-radius: 999px;
          font-size: 9.5px;
        }
        .mock-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 10px 11px;
          display: flex; flex-direction: column; gap: 6px;
          position: relative;
          cursor: grab;
        }
        .mock-card-id {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: var(--fg-muted);
          letter-spacing: 0.02em;
        }
        .mock-card-title {
          font-size: 11.5px;
          color: var(--fg);
          font-weight: 500;
          line-height: 1.35;
        }
        .mock-card-tag {
          position: absolute;
          top: 8px; right: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          padding: 1px 5px;
          border-radius: 3px;
          font-weight: 600;
          letter-spacing: 0.05em;
          background: var(--surface-2);
          color: var(--fg-soft);
        }
        .mock-card-tag.tone-accent {
          background: color-mix(in oklab, var(--accent-500) 16%, transparent);
          color: var(--accent);
        }
        .mock-card-tag.tone-done {
          background: color-mix(in oklab, var(--accent-500) 12%, transparent);
          color: var(--accent);
        }
        .mock-card.live::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 7px;
          border: 1px solid var(--accent);
          animation: pulse 2.4s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        .mock-presence {
          display: flex; gap: 4px; align-items: center;
        }
        .mock-presence .av {
          width: 14px; height: 14px;
          border-radius: 50%;
          border: 1.5px solid var(--bg-elevated);
          font-size: 7px;
          color: white;
          display: grid; place-items: center;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
        }
        .av.a1 { background: var(--brand-500); }
        .av.a2 { background: var(--accent-500); margin-left: -5px; }
        .av.a3 { background: #87C7FF; margin-left: -5px; }
      `}</style>
      <div className="mock-kanban-h">
        <div className="mock-kanban-title">
          <span className="crumb">DIRETORIA</span>
          <span className="sep">/</span>
          <span className="crumb">Zello</span>
          <span className="sep">/</span>
          <span>SGO v2 · Board</span>
        </div>
        <div className="mock-kanban-pills">
          <span className="mock-kanban-pill live">3 online</span>
          <span className="mock-kanban-pill">CFD</span>
          <span className="mock-kanban-pill">Sprint 14</span>
        </div>
      </div>
      <div className="mock-cols">
        {cols.map((c, i) => (
          <div key={i} className="mock-col">
            <div className="mock-col-h">
              <span>{c.name}</span>
              <span className="count">{c.items.length}</span>
            </div>
            {c.items.map((it, j) => (
              <div key={j} className={`mock-card ${it.live ? 'live' : ''}`}>
                <div className="mock-card-id">{it.id}</div>
                <div className="mock-card-title">{it.t}</div>
                <div className={`mock-card-tag ${it.tone ? 'tone-' + it.tone : ''}`}>{it.tag}</div>
                {i === 1 && j === 0 && (
                  <div className="mock-presence">
                    <span className="av a1">A</span>
                    <span className="av a2">B</span>
                    <span className="av a3">C</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroStats() {
  const stats = [
    { num: 'Em casa', label: 'feito pela Zello, sem dependência de fornecedor' },
    { num: 'Real-time', label: 'auditoria e operação ao vivo, sem esforço manual' },
    { num: '∞', label: 'perfis de permissão (antes: 3 fixos)' },
    { num: 'Da Zello', label: 'plataforma feita para cobrir tudo que a operação precisar' },
  ];
  return (
    <div className="hero-stats reveal" data-stagger="400">
      {stats.map((s, i) => (
        <div className="hero-stat" key={i}>
          <div className="hero-stat-num">{s.num}</div>
          <div className="hero-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ===== Section 2: The Shift (v1 -> v2) =====
function Shift() {
  const rows = [
    { k: 'Quem mantém',       v1: 'Fornecedor externo',         v2: 'Time Zello, em casa' },
    { k: 'Ritmo de evolução', v1: 'Trimestres, via contrato',   v2: 'Dias — iteração contínua' },
    { k: 'Custo',             v1: 'Licenças por usuário',       v2: 'Sem licenças de plataforma' },
    { k: 'Escopo',            v1: 'Uma operação interna',       v2: 'Multi-tenant (Org → Cliente)' },
    { k: 'Permissões',        v1: '3 perfis fixos',             v2: 'Perfis customizáveis por papel' },
    { k: 'Auditoria',         v1: 'Inexistente',                v2: 'Automática em toda operação' },
    { k: 'Operação ao vivo',  v1: 'Recarregar a tela',          v2: 'Atualização em tempo real' },
    { k: 'Integração com IA', v1: 'Inviável',                   v2: 'Operável por agentes' },
    { k: 'Qualidade',         v1: 'Sem testes automatizados',   v2: 'Cobertura automatizada' },
  ];
  return (
    <section className="section" id="shift">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">02 · A virada</span>
          <h2 className="section-title">Reconstruímos do zero — sem nostalgia.</h2>
          <p className="section-lede">
            A v1 fez seu papel, mas dependia de fornecedor para evoluir — e isso virou teto. A v2 não é refatoração: é uma plataforma nova, feita em casa, pensada para evoluir rápido e sustentar a operação no longo prazo.
          </p>
        </div>

        <div className="shift-grid reveal">
          <div className="shift-side v1">
            <h3>
              <span className="shift-tag v1">SGO-Zello v1</span>
            </h3>
            {rows.map((r, i) => (
              <div className="shift-row" key={i}>
                <span className="label">{r.k}</span>
                <span className="val">{r.v1}</span>
              </div>
            ))}
          </div>
          <div className="shift-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </div>
          <div className="shift-side v2">
            <h3>
              <span className="shift-tag v2">SGO v2 — 2026</span>
            </h3>
            {rows.map((r, i) => (
              <div className="shift-row" key={i}>
                <span className="label">{r.k}</span>
                <span className="val">{r.v2}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Shift, LogoSGO, ZelloMark });
