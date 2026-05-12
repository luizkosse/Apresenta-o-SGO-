// Multi-tenancy diagram + RBAC matrix
const { useState: useStateMT } = React;

function MultiTenancy() {
  const [active, setActive] = useStateMT(1);
  const levels = [
    {
      l: 1, label: 'Nível 1', name: 'Organization',
      meta: 'DIRETORIA', count: '1 org',
      detail: {
        eyebrow: 'Org → tenant raiz',
        title: 'A diretoria, no topo.',
        copy: 'A organização é o tenant raiz. Aqui ficam os admins globais, os perfis customizados e a relação com clientes. É o escopo que a Zello opera.',
        bullets: [
          'OrgRole: ADMIN | MEMBER',
          'CustomProfiles ilimitados',
          'Vê todos os clientes vinculados',
          'Audit log consolidado',
        ],
        iso: { key: 'orgId', val: 'org_zello' },
      },
    },
    {
      l: 2, label: 'Nível 2', name: 'Client',
      meta: 'TENANT', count: 'N clientes',
      detail: {
        eyebrow: 'Client → tenant isolado',
        title: 'Cada cliente, um mundo.',
        copy: 'Antes, "cliente" era apenas um cadastro. Hoje é um tenant isolado: dados, membros, times e auditoria próprios. Toda entidade carrega clientId — isolamento garantido em nível de dado.',
        bullets: [
          'ClientRole: ADMIN | MEMBER',
          'Membros vinculados ao escopo do cliente',
          'Indexação por orgId + clientId',
          'Rotas escopadas em /c/*',
        ],
        iso: { key: 'clientId', val: 'cli_acme_corp' },
      },
    },
    {
      l: 3, label: 'Nível 3', name: 'Team',
      meta: 'EQUIPE', count: 'N times',
      detail: {
        eyebrow: 'Team → squad operacional',
        title: 'Times reais, com papéis reais.',
        copy: 'O antigo "Squad" virou Team — agora pertence a um cliente específico, com hierarquia de papéis e composição clara.',
        bullets: [
          'Coordenador, Co-coordenador, Tech Leader, Membro',
          'Vínculo via TeamMember (uma pessoa, vários times)',
          'Custos do time agregáveis',
          'Permissões podem propagar do team',
        ],
        iso: { key: 'teamId', val: 'team_platform' },
      },
    },
    {
      l: 4, label: 'Nível 4', name: 'Project',
      meta: 'PROJETO', count: 'N projetos',
      detail: {
        eyebrow: 'Project → trabalho rastreável',
        title: 'Onde o trabalho acontece.',
        copy: 'Cada projeto tem execuções, sprints, metas, custos, documentos e dashboards próprios — tudo amarrado no escopo do cliente, com auditoria automática.',
        bullets: [
          'Execuções e alocações rastreáveis',
          'Sprints, metas e custos por time',
          'Métricas próprias por projeto',
          'Documentação anexa e calendar próprio',
        ],
        iso: { key: 'projectId', val: 'proj_sgo_v2' },
      },
    },
  ];
  const cur = levels.find(x => x.l === active);

  return (
    <section className="section" id="tenancy">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">03 · Multi-tenant</span>
          <h2 className="section-title">De ferramenta interna<br/>a plataforma SaaS.</h2>
          <p className="section-lede">
            A mudança conceitual mais profunda da v2: o que era "cadastro de cliente" virou um tenant isolado. Toda entidade carrega <span className="mono" style={{color:'var(--accent)'}}>orgId</span> e <span className="mono" style={{color:'var(--accent)'}}>clientId</span>. Hover em cada nível para ver o que muda.
          </p>
        </div>

        <div className="tenant-diagram reveal">
          <div className="tenant-stage" role="tablist" aria-label="Hierarquia multi-tenant">
            {levels.map(lv => (
              <button
                key={lv.l}
                role="tab"
                aria-selected={active === lv.l}
                className={`tenant-level l-${lv.l} ${active === lv.l ? 'active' : ''}`}
                onMouseEnter={() => setActive(lv.l)}
                onFocus={() => setActive(lv.l)}
                onClick={() => setActive(lv.l)}>
                <span className="tenant-icon">{lv.l}</span>
                <span className="tenant-meta">
                  <span className="tenant-meta-label">{lv.meta}</span>
                  <span className="tenant-meta-name">{lv.name}</span>
                </span>
                <span className="tenant-count">{lv.count}</span>
              </button>
            ))}
          </div>

          <div className="tenant-detail">
            <div className="tenant-detail-eyebrow mono">{cur.detail.eyebrow}</div>
            <h3>{cur.detail.title}</h3>
            <p>{cur.detail.copy}</p>
            <ul>
              {cur.detail.bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
            <div className="tenant-iso">
              <span className="key">{cur.detail.iso.key}</span>
              <span style={{color: 'var(--fg-muted)'}}>: </span>
              <span>"{cur.detail.iso.val}"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== RBAC =====
function RBAC() {
  const features = [
    'execucoes.update',
    'projects.edit',
    'teams.manage',
    'audit.view',
    'execucoes.create',
    'org.clients.create',
  ];
  const profiles = [
    { name: 'Operações', perms: ['on','partial','off','off','on','off'] },
    { name: 'Liderança',  perms: ['on','on','on','partial','on','off'] },
    { name: 'Compliance', perms: ['off','off','off','on','partial','off'] },
    { name: 'Diretoria',  perms: ['on','on','on','on','on','on'] },
  ];
  return (
    <section className="section" id="permissions">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">04 · Permissões</span>
          <h2 className="section-title">Onde antes havia três caixas, agora há uma matriz.</h2>
          <p className="section-lede">
            A v1 trabalhava com três perfis fixos. A v2 combina três níveis (User, Org, Client) com perfis customizáveis em nível de feature — granularidade real, controlada pela diretoria.
          </p>
        </div>

        <div className="rbac-grid reveal">
          <div className="rbac-old">
            <h4>
              <span className="shift-tag v1">v1 · 3 caixas fixas</span>
            </h4>
            <div className="rbac-old-roles">
              <div className="rbac-role-fixed">
                <span className="name">Admin</span>
                <span className="perms">acesso total</span>
              </div>
              <div className="rbac-role-fixed">
                <span className="name">Gestor</span>
                <span className="perms">execuções · alocações · projetos · demandas · dashboards</span>
              </div>
              <div className="rbac-role-fixed">
                <span className="name">Usuário</span>
                <span className="perms">execuções · alocações · projetos · competências</span>
              </div>
            </div>
            <p style={{marginTop: 24, fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg-muted)'}}>
              Sem flexibilidade para novas estruturas. Adicionar um novo papel exigia alterar código.
            </p>
          </div>

          <div className="rbac-new">
            <h4>
              <span className="shift-tag v2">v2 · perfis customizáveis</span>
            </h4>
            <div className="rbac-matrix" role="table">
              <div className="rbac-head">Permissão</div>
              {profiles.map(p => (<div key={p.name} className="rbac-head">{p.name}</div>))}
              {features.map((f, i) => (
                <React.Fragment key={f}>
                  <div className="rbac-row-label mono">{f}</div>
                  {profiles.map(p => (
                    <div key={p.name + i} className={`rbac-cell ${p.perms[i]}`}>
                      <span className="dot"></span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div style={{display: 'flex', gap: 16, marginTop: 16, fontSize: 12, color: 'var(--fg-muted)', flexWrap: 'wrap'}}>
              <span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:10, height:10, borderRadius:3, background:'var(--brand-500)'}}></span> permite</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:10, height:10, borderRadius:3, background:'var(--accent-500)'}}></span> condicional</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:10, height:10, borderRadius:3, background:'var(--surface-3)'}}></span> nega</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MultiTenancy, RBAC });
