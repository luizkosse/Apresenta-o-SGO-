// Features grid + Stack + Roadmap + CTA + Footer

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">05 · Funcionalidades</span>
          <h2 className="section-title">O que o SGO faz, em concreto.</h2>
          <p className="section-lede">
            Cinco capacidades que sustentam a operação. Não são módulos isolados — todas se cruzam na auditoria, no chat interno e nas métricas do projeto.
          </p>
        </div>

        <div className="features-grid reveal">
          {/* Big card: Chat Zello */}
          <div className="feature-card col-4">
            <span className="feature-tag">chat zello · interno</span>
            <h3>Conversa onde o trabalho acontece.</h3>
            <p>O novo Chat Zello substituiu o Mattermost. Canais por organização, cliente e projeto. Conversas amarradas ao escopo, com permissão herdada do RBAC e histórico auditado.</p>
            <div className="feature-visual">
              <div className="mini-chat">
                <div className="mini-chat-side">
                  <div className="mini-chat-sec">canais</div>
                  <div className="mini-chat-ch">
                    <span className="hash">#</span>
                    <span>geral</span>
                  </div>
                  <div className="mini-chat-ch act">
                    <span className="hash">#</span>
                    <span>ops-acme</span>
                    <span className="dot"></span>
                  </div>
                  <div className="mini-chat-ch">
                    <span className="hash">#</span>
                    <span>prod-vertex</span>
                  </div>
                  <div className="mini-chat-sec" style={{marginTop: 8}}>DMs</div>
                  <div className="mini-chat-ch">
                    <span className="av-mini a1">BL</span>
                    <span>Bruno Lima</span>
                  </div>
                  <div className="mini-chat-ch">
                    <span className="av-mini a2">AS</span>
                    <span>Ana Silva</span>
                  </div>
                </div>
                <div className="mini-chat-main">
                  <div className="mini-chat-h">
                    <span className="hash">#</span>
                    <span className="ch-name">ops-acme</span>
                    <span className="ch-scope">ORG · DOP / Acme Corp</span>
                  </div>
                  <div className="mini-msgs">
                    <div className="mini-msg">
                      <span className="av-mini a1">BL</span>
                      <div>
                        <div className="mini-msg-h"><b>Bruno</b><span>10:42</span></div>
                        <div className="mini-msg-b">Subi a release pro homolog do Acme — pode validar?</div>
                      </div>
                    </div>
                    <div className="mini-msg">
                      <span className="av-mini a2">AS</span>
                      <div>
                        <div className="mini-msg-h"><b>Ana</b><span>10:44</span></div>
                        <div className="mini-msg-b">No ar. Vou rodar o smoke agora.</div>
                      </div>
                    </div>
                    <div className="mini-msg">
                      <span className="av-mini a3">CD</span>
                      <div>
                        <div className="mini-msg-h"><b>Carla</b><span>10:47</span></div>
                        <div className="mini-msg-b">👍 passou. Liberado para release.</div>
                      </div>
                    </div>
                  </div>
                  <div className="mini-chat-input">
                    <span>Mensagem em #ops-acme…</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audit log */}
          <div className="feature-card col-2">
            <span className="feature-tag">audit log</span>
            <h3>Cada ação rastreada.</h3>
            <p>Sem esforço manual: toda mutação cria um registro com diff, autor, escopo e timestamp.</p>
            <div className="feature-visual">
              <div className="mini-audit">
                <div className="mini-audit-row"><span className="who">b.lima</span> exec.status update <span className="when">2m</span></div>
                <div className="mini-audit-row"><span className="who">a.silva</span> perm.role edit <span className="when">14m</span></div>
                <div className="mini-audit-row"><span className="who">c.dias</span> team.member +1 <span className="when">1h</span></div>
                <div className="mini-audit-row"><span className="who">b.lima</span> client.created <span className="when">3h</span></div>
              </div>
            </div>
          </div>

          {/* Execuções & alocações */}
          <div className="feature-card col-3">
            <span className="feature-tag">execuções · alocações</span>
            <h3>Fluxo dedicado, não modal sobrecarregado.</h3>
            <p>Status atualizável inline, batch updates, razão de status com popover, exportação CSV nativa. Audit log a cada mudança. WebSocket replica a alteração para outros usuários em tempo real.</p>
            <div className="feature-visual" style={{padding: 16}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 6, height: '100%', justifyContent: 'center'}}>
                {[
                  {id: 'EXEC-2041', cli: 'Acme', status: 'Em curso', tone: 'accent'},
                  {id: 'EXEC-2042', cli: 'Globex', status: 'Aguardando', tone: 'mute'},
                  {id: 'EXEC-2043', cli: 'Initech', status: 'Concluída', tone: 'done'},
                  {id: 'EXEC-2044', cli: 'Acme', status: 'Em curso', tone: 'accent'},
                ].map((r, i) => (
                  <div key={i} style={{display:'flex', alignItems:'center', gap:10, padding:'7px 10px', background:'var(--bg-elevated)', borderRadius:6, border:'1px solid var(--border)', fontFamily:'JetBrains Mono, monospace', fontSize: 10.5, color:'var(--fg-soft)'}}>
                    <span style={{color: 'var(--fg-muted)'}}>{r.id}</span>
                    <span style={{color: 'var(--fg)'}}>{r.cli}</span>
                    <span style={{
                      marginLeft: 'auto',
                      padding: '1px 6px', borderRadius: 3, fontSize: 9, fontWeight: 600,
                      background: r.tone === 'accent' ? 'color-mix(in oklab, var(--accent-500) 18%, transparent)'
                                : r.tone === 'done' ? 'color-mix(in oklab, var(--accent-500) 12%, transparent)'
                                : 'var(--surface-2)',
                      color: r.tone === 'mute' ? 'var(--fg-muted)' : 'var(--accent)'
                    }}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sprints + metas + custos */}
          <div className="feature-card col-3">
            <span className="feature-tag">sprints · metas · custos</span>
            <h3>Gestão estratégica, não só operacional.</h3>
            <p>Sprints organizam a entrega; metas amarram objetivos; custos por time fecham o ciclo financeiro. Tudo no mesmo escopo do projeto.</p>
            <div className="feature-visual">
              <div className="mini-chart">
                <div className="mini-chart-line"></div>
                <div className="mini-chart-row">
                  {[40, 65, 30, 75, 55, 90, 60, 80, 45, 70, 88, 95].map((h, i) => (
                    <div key={i} className="mini-chart-bar" style={{height: `${h}%`, opacity: 0.4 + (h/200)}}></div>
                  ))}
                </div>
                <div className="mini-chart-line"></div>
              </div>
            </div>
          </div>

          {/* Dashboards */}
          <div className="feature-card col-6">
            <span className="feature-tag">dashboards próprios</span>
            <h3>Métricas que importam, sem dependência externa.</h3>
            <p>Visão consolidada da operação Zello: utilização do time, execuções no mês, atingimento de metas e custo por projeto. Tudo calculado em tempo real, no escopo de cada cliente.</p>
            <div className="feature-visual" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, padding: 16}}>
              {[
                { l: 'Utilização', v: '86%', sub: 'alocação do time', d: '+4 pp no mês' },
                { l: 'Execuções', v: '142', sub: 'fechadas no mês', d: '+23% vs anterior' },
                { l: 'Metas',     v: '74%', sub: 'atingimento Q2', d: '6 de 8 no alvo' },
                { l: 'Custo',     v: 'R$ 312k', sub: 'time + projeto', d: '-5% vs orçado' },
              ].map((m, i) => (
                <div key={i} style={{padding:'14px 16px', background:'var(--bg-elevated)', border:'1px solid var(--border)', borderRadius: 10}}>
                  <div style={{fontFamily:'JetBrains Mono, monospace', fontSize: 10.5, color:'var(--fg-muted)', textTransform:'uppercase', letterSpacing:'0.04em'}}>{m.l}</div>
                  <div style={{fontFamily:'Manrope, sans-serif', fontWeight: 700, fontSize: 28, marginTop: 4, color: 'var(--fg)', letterSpacing:'-0.02em'}}>{m.v}</div>
                  <div style={{fontSize: 11, color:'var(--fg-muted)'}}>{m.sub}</div>
                  <div style={{fontSize: 10.5, color:'var(--accent)', marginTop:6, fontFamily:'JetBrains Mono, monospace'}}>• {m.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Stack =====
function Stack() {
  const groups = [
    { h: 'Frontend', cat: 'front', items: ['React 18.3', 'Vite 5.4', 'TypeScript', 'Tailwind CSS', 'shadcn/ui (Radix)', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'DnD Kit', 'recharts', 'socket.io-client'] },
    { h: 'Backend', cat: 'back', items: ['NestJS 10', 'TypeScript', 'class-validator', 'JWT (httpOnly)', 'OAuth2 Google', 'socket.io', 'Swagger', 'Vitest / Jest'] },
    { h: 'Dados & infra', cat: 'data', items: ['MongoDB 8.4', 'Mongoose ODM', 'Redis 5.4', 'BullMQ 5.8'] },
    { h: 'Integração & IA', cat: 'ai', items: ['Express + MCP SDK', 'Tauri (desktop opcional)'] },
  ];
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">06 · Stack & engenharia</span>
          <h2 className="section-title">TypeScript do banco ao botão.</h2>
          <p className="section-lede">
            Um time, uma linguagem, tipos compartilhados entre front e back. Sem licenças de plataforma de integração, sem código gerado por low-code, sem lock-in de ferramenta.
          </p>
        </div>

        <div className="stack-grid reveal">
          <div>
            {groups.map(g => (
              <React.Fragment key={g.h}>
                <div className="stack-section-h">{g.h}</div>
                <div className="stack-pills">
                  {g.items.map(it => (
                    <span key={it} className="stack-pill" data-cat={g.cat}>
                      <span className="dot"></span>{it}
                    </span>
                  ))}
                </div>
              </React.Fragment>
            ))}

            <div className="mcp-callout">
              <div className="mcp-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
                </svg>
              </div>
              <div>
                <h4>
                  Operável por agentes de IA
                  <span className="mcp-tag">MCP</span>
                </h4>
                <p>O <span className="mono">apps/mcp-sgo</span> expõe o sistema via Model Context Protocol — algo impensável na arquitetura Mulesoft/Flutter da v1.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="code-window">
              <div className="code-head">
                <span className="dots"><i></i><i></i><i></i></span>
                <span>backend-sgo / src / modules / clients / clients.controller.ts</span>
              </div>
              <div className="code-body">
                <span className="ln dim"><span className="tk-co">// Mesmo tipo no front e no back. Um schema, uma verdade.</span></span>
                <span className="ln"><span className="tk-kw">import</span> {'{'} ClientDto, CreateClientDto {'}'} <span className="tk-kw">from</span> <span className="tk-st">'@sgo/shared'</span>;</span>
                <span className="ln"> </span>
                <span className="ln">@<span className="tk-fn">Controller</span>(<span className="tk-st">'orgs/:orgId/clients'</span>)</span>
                <span className="ln">@<span className="tk-fn">UseGuards</span>(JwtAuthGuard, OrgScopeGuard)</span>
                <span className="ln"><span className="tk-kw">export class</span> <span className="tk-ty">ClientsController</span> {'{'}</span>
                <span className="ln">{"  "}@<span className="tk-fn">Post</span>()</span>
                <span className="ln">{"  "}@<span className="tk-fn">RequirePermission</span>(<span className="tk-st">'org.clients.create'</span>)</span>
                <span className="ln">{"  "}<span className="tk-kw">async</span> <span className="tk-fn">create</span>(</span>
                <span className="ln">{"    "}@<span className="tk-pr">Param</span>(<span className="tk-st">'orgId'</span>) orgId: <span className="tk-ty">string</span>,</span>
                <span className="ln">{"    "}@<span className="tk-pr">Body</span>() dto: <span className="tk-ty">CreateClientDto</span>,</span>
                <span className="ln">{"    "}@<span className="tk-pr">CurrentUser</span>() user: <span className="tk-ty">User</span>,</span>
                <span className="ln">{"  "}): <span className="tk-ty">Promise</span>&lt;<span className="tk-ty">ClientDto</span>&gt; {'{'}</span>
                <span className="ln">{"    "}<span className="tk-kw">const</span> client = <span className="tk-kw">await</span> <span className="tk-kw">this</span>.svc.<span className="tk-fn">create</span>(orgId, dto, user);</span>
                <span className="ln">{"    "}<span className="tk-kw">await</span> <span className="tk-kw">this</span>.audit.<span className="tk-fn">log</span>(<span className="tk-st">'client.created'</span>, {'{'} orgId, client {'}'});</span>
                <span className="ln">{"    "}<span className="tk-kw">this</span>.realtime.<span className="tk-fn">broadcast</span>(orgId, <span className="tk-st">'client:created'</span>, client);</span>
                <span className="ln">{"    "}<span className="tk-kw">return</span> client;</span>
                <span className="ln">{"  "}{'}'}</span>
                <span className="ln">{'}'}</span>
              </div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 12, marginTop: 16}}>
              {[
                {l: 'Validação', v: 'Dupla', sub: 'Zod + class-validator'},
                {l: 'Estado', v: 'Cached', sub: 'Zustand + TanStack Query'},
                {l: 'Realtime', v: 'Live', sub: 'socket.io'},
              ].map(s => (
                <div key={s.l} style={{padding: 14, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--surface)'}}>
                  <div style={{fontFamily:'JetBrains Mono, monospace', fontSize: 10.5, color:'var(--fg-muted)', textTransform:'uppercase'}}>{s.l}</div>
                  <div style={{fontFamily:'Manrope', fontWeight: 700, fontSize: 18, marginTop: 4, color: 'var(--fg)'}}>{s.v}</div>
                  <div style={{fontSize: 11.5, color:'var(--fg-muted)'}}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Roadmap =====
function Roadmap() {
  const steps = [
    { q: 'Q1 / 2026', state: 'done', title: 'Decisão: criar o SGO v2', body: 'Análise da v1 (FlutterFlow + Mulesoft) e do que ela já não comportava. Decisão estratégica de reescrever do zero, em casa, com nossa stack e nossa metodologia.' },
    { q: 'Q2 / 2026', state: 'now',  title: 'Onde estamos', body: 'SGO v2 em produção. Multi-tenancy, RBAC, audit log, sprints, metas e dashboards próprios. Organizações e Clientes implementados. Novo Chat Zello no ar — substituto oficial do Mattermost.' },
    { q: 'Q3 / 2026', state: 'next', title: 'ATS + Gestão de Pessoas', body: 'ATS para recrutamento e seleção. Avaliações pós-demanda, feedback do gestor sobre o time e acompanhamento dos colaboradores. Gestão de Férias. Agenda · Lancha — reserva de datas.' },
    { q: 'Q4 / 2026', state: '',     title: 'E agora, o que vem a seguir?', body: 'Chegamos até aqui juntos. O próximo passo é a Zello que decide: quais dores ainda precisam de um lar? Quais processos faltam? Estamos prontos.' },
    { q: '2027',      state: '',     title: 'SGO com a cara da Zello', body: 'Todos os parâmetros e controles da operação em um único lugar — com a identidade, o ritmo e a cultura da empresa. Visibilidade total, gestão centralizada, independência de ferramentas externas.' },
  ];
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">07 · Roadmap</span>
          <h2 className="section-title">O que vem a seguir.</h2>
          <p className="section-lede">
            A v2 já é a base. Os próximos quatro marcos consolidam o produto e abrem o caminho para servir outras organizações além da Zello.
          </p>
        </div>

        <div className="roadmap-track reveal">
          {steps.map(s => (
            <div key={s.q} className={`roadmap-step ${s.state}`}>
              <div className="roadmap-quarter">{s.q}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CTA + Footer =====
function CTA() {
  return (
    <section className="section" id="cta" style={{paddingBottom: 0}}>
      <div className="container">
        <div className="cta reveal">
          <div className="cta-inner">
            <h2>Bora ver o SGO funcionando?</h2>
            <p>Entra com seu acesso Zello e dá uma volta pelo sistema.</p>
            <div className="cta-actions">
              <a href="https://sgo.zello.space/login" target="_blank" rel="noopener" className="btn btn-primary">
                Vamos lá?
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div style={{maxWidth: 320}}>
            <LogoSGO />
            <p style={{marginTop: 16, fontSize: 14, lineHeight: 1.6, color: 'var(--fg-muted)'}}>
              Plataforma de gestão organizacional multi-tenant. Construída pelo squad de IA &amp; Operações da Zello.
            </p>
          </div>
          <div className="footer-col">
            <h5>Produto</h5>
            <ul>
              <li><a href="#tenancy">Multi-tenancy</a></li>
              <li><a href="#permissions">Permissões</a></li>
              <li><a href="#features">Funcionalidades</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Engenharia</h5>
            <ul>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#stack">MCP / Agentes</a></li>
              <li><a href="#shift">v1 → v2</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li><a href="https://sgo.zello.space/login" target="_blank" rel="noopener">Entrar no SGO</a></li>
              <li><a href="mailto:sgo@zello.tec.br">sgo@zello.tec.br</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <ZelloMark />
          <span className="mono" style={{fontSize: 12, color: 'var(--fg-dim)'}}>© 2026 · SGO v2 · Build {new Date().toISOString().slice(0,10)}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Features, Stack, Roadmap, CTA, Footer });
