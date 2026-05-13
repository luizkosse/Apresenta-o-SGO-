// DevStory — making-of section: numbers, workflow, agents, team voices

function DevStory() {
  const stats = [
    { v: '382', l: 'Cards no board' },
    {
      type: 'breakdown',
      l: 'Esforço manual por card',
      rows: [
        { k: 'S', count: '230 cards', time: '~2 dias cada' },
        { k: 'M', count: '135 cards', time: '~5 dias cada' },
        { k: 'L', count: '10 cards',  time: '~12 dias cada' },
      ],
    },
    { v: '1.250', l: 'Dev-dias manuais', sub: 'equivalente em esforço humano' },
    { v: '1 mês', l: 'Tempo real', sub: 'do primeiro card ao SGO v2' },
  ];

  const agents = [
    {
      k: 'spec',
      n: 'Spec-Kit',
      role: 'Levantamento',
      cmd: '/z-new-spec-kit',
      d: 'Conversa iterativa com o humano antes de qualquer código. Força clareza sobre o quê e o porquê — não sobre o como. O artefato é um spec completo, com escopo, critérios de aceite e edge cases.',
      out: 'spec.md',
      human: 'pergunta e responde',
    },
    {
      k: 'prd',
      n: 'PRD Agent',
      role: 'Quebra em cards',
      cmd: '/z-prd',
      d: 'Pega o spec aprovado e decompõe em cards S/M/L com dependências mapeadas. Cada card já nasce com critérios de aceite, contexto e tamanho estimado.',
      out: 'cards no kanban',
      human: 'aprova a decomposição',
    },
    {
      k: 'arch',
      n: 'Architect',
      role: 'Plano técnico',
      cmd: '/z-architect {ID}',
      d: 'Para cada card M ou L, desenha o plano de implementação: arquivos, contratos, modelo de dados, pontos de integração. Roda antes do desenvolvimento começar.',
      out: 'plano de arquitetura',
      human: 'valida a abordagem',
    },
    {
      k: 'dev',
      n: 'Developer',
      role: 'Execução',
      cmd: '/z-dev {ID}',
      d: 'Implementa seguindo o plano. Roda testes localmente, abre PR com a referência ao card. Se algo ambíguo aparece, pausa e pergunta — não inventa.',
      out: 'pull request',
      human: 'só em decisões críticas',
    },
    {
      k: 'review',
      n: 'Reviewer + Done Gate',
      role: 'Qualidade',
      cmd: '/z-review {ID}',
      d: 'Revisa o diff contra os critérios de aceite. Marca o card como concluído só depois que o gate final passa — testes, qualidade, segurança e conformidade com o spec.',
      out: 'card em Done',
      human: 'aprova o merge',
    },
  ];

  const quotes = [
    {
      who: 'Luiz Felipe',
      role: 'Engenharia · SGO',
      init: 'LF',
      tone: 'a',
      body: [
        'Desenvolver o SGO com o Claude Code foi uma experiência diferente de tudo que já vi. Sou analista, não programador — entendo o básico de código, mas não escrevo. E foi exatamente isso que fez a diferença: ter entendimento suficiente para criar prompts precisos, descrever o problema certo, e questionar quando algo não fazia sentido.',
        'O que mais me surpreendeu foi o Spec Kit. Antes de qualquer linha de código, ele me força a pensar no o quê e no por quê — não no como. Isso mudou completamente a qualidade das demandas. Os cards saíam completos: critérios de aceite claros, escopo bem definido. O agente de desenvolvimento não precisava adivinhar nada.',
        'Não é sobre saber programar. É sobre saber o que você quer — e ter uma ferramenta que te ajuda a articular isso com precisão.',
      ],
    },
  ];

  return (
    <section className="section" id="devstory">
      <style>{`
        .ds-agents {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-top: 28px;
        }
        .ds-agent {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          transition: border-color 200ms ease, transform 200ms ease;
        }
        .ds-agent:hover {
          border-color: color-mix(in oklab, var(--brand-500) 30%, var(--border));
          transform: translateY(-2px);
        }
        .ds-agent-num {
          position: absolute;
          top: 12px; right: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--fg-dim);
        }
        .ds-agent-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent);
        }
        .ds-agent-n {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--fg);
          letter-spacing: -0.01em;
        }
        .ds-agent-cmd {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 3px 7px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--fg-soft);
          width: fit-content;
        }
        .ds-agent-d {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--fg-muted);
          margin: 4px 0 0;
        }
        .ds-agent-foot {
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--fg-muted);
        }
        .ds-agent-foot .k { color: var(--fg-dim); }
        .ds-agent-foot .v { color: var(--fg-soft); }

        .ds-pillars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 32px;
        }
        .ds-pillar {
          padding: 22px 22px 24px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ds-pillar-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .ds-pillar h3 {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 19px;
          color: var(--fg);
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin: 0;
        }
        .ds-pillar p {
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--fg-muted);
          margin: 0;
        }
        .ds-pillar code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 1px 6px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--fg-soft);
        }

        .ds-mcp {
          margin-top: 24px;
          padding: 18px 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .ds-mcp-ic {
          flex-shrink: 0;
          width: 36px; height: 36px;
          border-radius: 8px;
          display: grid; place-items: center;
          color: var(--accent);
          background: color-mix(in oklab, var(--accent-500) 12%, transparent);
          border: 1px solid color-mix(in oklab, var(--accent-500) 25%, transparent);
        }
        .ds-mcp h4 {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--fg);
          margin: 0;
          display: flex; align-items: center; gap: 8px;
        }
        .ds-mcp h4 .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          padding: 2px 6px;
          border-radius: 3px;
          background: color-mix(in oklab, var(--accent-500) 14%, transparent);
          color: var(--accent);
          letter-spacing: 0.05em;
        }
        .ds-mcp p {
          font-size: 13px;
          line-height: 1.5;
          color: var(--fg-muted);
          margin: 4px 0 0;
        }

        @media (max-width: 1080px) { .ds-agents { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 760px)  {
          .ds-agents { grid-template-columns: 1fr; }
          .ds-pillars { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">07 · Como foi feito</span>
          <h2 className="section-title">Spec-first, agent-driven.</h2>
          <p className="section-lede">
            O SGO v2 foi construído com uma metodologia própria: agentes especializados executam cada fase do pipeline, o board virou fonte da verdade, e o humano só pausa em decisões críticas. Um time pequeno tomando decisões grandes.
          </p>
        </div>

        <div className="ds-stats reveal">
          {stats.map(s => (
            <div className={`ds-stat${s.type === 'breakdown' ? ' ds-stat--breakdown' : ''}`} key={s.l}>
              {s.type === 'breakdown' ? (
                <>
                  <ul className="ds-stat-rows">
                    {s.rows.map(r => (
                      <li key={r.k}>
                        <span className="ds-stat-tag">{r.k}</span>
                        <span className="ds-stat-count">{r.count}</span>
                        <span className="ds-stat-time">{r.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="ds-stat-l">{s.l}</div>
                </>
              ) : (
                <>
                  <div className="ds-stat-v">{s.v}</div>
                  <div className="ds-stat-l">{s.l}</div>
                  {s.sub && <div className="ds-stat-sub">{s.sub}</div>}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="reveal" style={{marginTop: 48}}>
          <span className="eyebrow" style={{display: 'block', marginBottom: 8}}>Pipeline de agentes</span>
          <h3 style={{fontFamily: 'Manrope', fontWeight: 700, fontSize: 24, color: 'var(--fg)', letterSpacing: '-0.01em', margin: 0}}>
            Da ideia ao Done — cada fase, um agente.
          </h3>
          <p style={{fontSize: 15, lineHeight: 1.55, color: 'var(--fg-muted)', maxWidth: 720, marginTop: 8}}>
            Não é "IA escrevendo código". É uma cadeia de agentes especializados, cada um com responsabilidade clara, artefato esperado e ponto de entrada do humano. O pipeline é determinístico — o trabalho criativo é o spec.
          </p>
        </div>

        <div className="ds-agents reveal">
          {agents.map((a, i) => (
            <div className="ds-agent" key={a.k}>
              <span className="ds-agent-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="ds-agent-role">{a.role}</div>
              <div className="ds-agent-n">{a.n}</div>
              <span className="ds-agent-cmd">{a.cmd}</span>
              <p className="ds-agent-d">{a.d}</p>
              <div className="ds-agent-foot">
                <div><span className="k">artefato</span> &nbsp;<span className="v">{a.out}</span></div>
                <div><span className="k">humano</span> &nbsp;<span className="v">{a.human}</span></div>
              </div>
            </div>
          ))}
        </div>

        <div className="ds-pillars reveal">
          <div className="ds-pillar">
            <span className="ds-pillar-eyebrow">Spec Kit</span>
            <h3>O quê e o porquê antes do como.</h3>
            <p>
              Antes de qualquer card existir, o <code>/z-new-spec-kit</code> guia uma sessão estruturada com o humano. Pergunta o problema, o usuário, o resultado esperado, as restrições, os edge cases. Só depois disso vira PRD.
            </p>
            <p>
              É o que destrava o resto: com spec bom, o agente de desenvolvimento não inventa — implementa. Sem ele, o pipeline inteiro produz código que precisa ser refeito.
            </p>
          </div>
          <div className="ds-pillar">
            <span className="ds-pillar-eyebrow">Board como fonte da verdade</span>
            <h3>Todo histórico vive no card.</h3>
            <p>
              Spec, plano de arquitetura, decisões, revisões, diffs — tudo fica anexado ao card. Nada se perde em chat, email ou cabeça de alguém.
            </p>
            <p>
              Se um agente é interrompido no meio de um card, <code>/z-pipeline {'{ID}'}</code> retoma do ponto exato. O contexto está sempre lá — pronto para o próximo agente, ou para o próximo humano.
            </p>
          </div>
        </div>

        <div className="ds-mcp reveal">
          <div className="ds-mcp-ic">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
            </svg>
          </div>
          <div>
            <h4>O SGO também é operável por agentes <span className="tag">MCP</span></h4>
            <p>O próprio sistema expõe um servidor de Model Context Protocol — agentes de IA podem consultar e atuar sobre a plataforma com as mesmas permissões de um usuário humano. A operação fica preparada para o que vem a seguir.</p>
          </div>
        </div>

        <div className="ds-voices reveal" style={{marginTop: 32}}>
          {quotes.map(q => (
            <figure className={`ds-quote tone-${q.tone}`} key={q.who}>
              <svg className="ds-qmark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M9 21h-3v-6c0-3 2-6 5-7v3c-1.5 1-2 2.5-2 4h3v6zm12 0h-3v-6c0-3 2-6 5-7v3c-1.5 1-2 2.5-2 4h3v6z" fill="currentColor"/>
              </svg>
              <blockquote>
                {q.body.map((p, i) => <p key={i}>{p}</p>)}
              </blockquote>
              <figcaption>
                <span className={`ds-av av-${q.tone}`}>{q.init}</span>
                <span>
                  <b>{q.who}</b>
                  <span className="ds-role">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DevStory });
