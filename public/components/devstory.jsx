// DevStory — making-of section: numbers, workflow, team voices

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

  const flow = [
    { k: 'spec kit',     t: 'Levantamento',  d: 'Sessão iterativa com o humano para entender o quê e o porquê. O comando /z-new-spec-kit força clareza antes de qualquer código.' },
    { k: 'prd',          t: 'PRD + cards',   d: 'A demanda vira PRD, que se decompõe em cards S/M/L com dependências. Cada card já nasce com critérios de aceite.' },
    { k: 'pipeline',     t: 'Pipeline',      d: 'Refinamento → Arquitetura → Dev → Review → Done Gate. Cada fase é um agente especializado; o humano só pausa em decisões críticas.' },
    { k: 'kanban',       t: 'Board é a fonte da verdade', d: 'Todo histórico vive no card: spec, plano, review, decisões. Se o agente é interrompido, /z-pipeline {ID} retoma do ponto exato.' },
  ];

  const quotes = [
    {
      who: 'Luiz Felipe',
      role: 'Engenharia · SGO',
      init: 'LF',
      tone: 'a',
      body: [
        'Desenvolver o SGO com o Claude Code foi uma experiência diferente de tudo que já vi. Sou analista, não programador — entendo o básico de código, mas não escrevo. E foi exatamente isso que fez a diferença: ter entendimento suficiente para criar prompts precisos, descrever o problema certo, e questionar quando algo não fazia sentido.',
        'O que mais me surpreendeu foi o Spec Kit. Antes de qualquer linha de código, ele me força a pensar no o quê e no por quê — não no como. Isso mudou completamente a qualidade das demandas. Os cards saíam completos: critérios de aceite claros, edge cases mapeados, escopo bem definido. O agente de desenvolvimento não precisava adivinhar nada.',
        'Não é sobre saber programar. É sobre saber o que você quer — e ter uma ferramenta que te ajuda a articular isso com precisão.',
      ],
    },
    {
      who: 'Philipe Firmo',
      role: 'Engenharia · SGO',
      init: 'PF',
      tone: 'b',
      body: ['[Placeholder — envie o feedback do Philipe Firmo sobre o processo. Vou substituir aqui.]'],
    },
  ];

  return (
    <section className="section" id="devstory">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">08 · Como foi feito</span>
          <h2 className="section-title">Spec-first, agent-driven.</h2>
          <p className="section-lede">
            99% do SGO foi escrito com Claude Code seguindo uma metodologia própria — o board virou fonte da verdade e os agentes assumiram o pipeline de execução. Por baixo dos números, um time pequeno tomando decisões grandes.
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

        <div className="ds-grid reveal">
          <div className="ds-flow">
            <div className="ds-flow-h">
              <span className="ds-flow-eyebrow">Fluxo de trabalho</span>
              <h3>Da ideia ao done, sem handoff por email.</h3>
            </div>
            <ol className="ds-flow-list">
              {flow.map((f, i) => (
                <li key={f.k} className="ds-flow-step">
                  <span className="ds-flow-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="ds-flow-k">{f.k}</div>
                    <div className="ds-flow-t">{f.t}</div>
                    <p>{f.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ds-flow-foot">
              <span className="mono">tamanho (S/M/L) define a rota</span>
              <span className="sep">·</span>
              <span className="mono">humano só nos gates críticos</span>
            </div>
          </div>

          <div className="ds-voices">
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
      </div>
    </section>
  );
}

Object.assign(window, { DevStory });
