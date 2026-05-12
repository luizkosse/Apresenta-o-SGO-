# Handoff: Site de Apresentação Interativa do SGO v2

> Pacote de handoff para implementação do site institucional do **SGO v2** em uma stack de produção (Next.js / React / Vue / etc.). Os arquivos HTML/JSX em anexo são **referências de design**, não código pronto para produção.

---

## 1. Visão geral

O site é uma **landing page única (one-page)** de apresentação do SGO v2 — a nova plataforma multi-tenant de gestão organizacional da Zello, que substituiu a v1 (FlutterFlow + Mulesoft).

**Objetivo:** comunicar para o público interno da Zello (e potencialmente para outras organizações) **o que mudou da v1 para a v2**, **como o sistema funciona** (multi-tenancy, RBAC, funcionalidades), **a stack técnica**, **o roadmap** e **como o sistema foi desenvolvido** (Spec-First, Agent-Driven com Claude Code).

CTA principal: `https://sgo.zello.space/login` ("Vamos lá?").

---

## 2. Sobre os arquivos de design

Os arquivos nesta pasta foram criados como **protótipo HTML hi-fi** (React + JSX inline via Babel standalone, CSS puro com custom properties). Eles servem como:

- **Referência visual** — cores, tipografia, espaçamento, layout, animações, estados.
- **Referência de copy** — todo o texto em português está aqui, pronto para uso.
- **Referência de comportamento** — interações (hover, reveal-on-scroll, theme toggle).

**A tarefa NÃO é** colocar esses arquivos em produção como estão. **A tarefa É** recriar este site no ambiente de produção alvo — provavelmente Next.js (App Router) com Tailwind, ou Vite + React, ou Astro — usando os padrões da equipe (componentes tipados, imagens otimizadas, SEO, deploy).

Se ainda não houver decisão de stack: **recomendado Next.js 15 + Tailwind CSS + TypeScript** (alinha com a stack do `frontend-sgo` que usa React 18 + Vite + Tailwind + shadcn/ui).

---

## 3. Fidelidade

**Hi-fi (alta fidelidade).** Pixel-perfect: cores finais, tipografia final, espaçamento final, copy final, animações finais. O dev deve replicar exatamente.

Tema dark é o padrão. Tema light deve funcionar (toggle no nav e no painel Tweaks).

---

## 4. Estrutura — 10 seções na ordem

| # | ID âncora    | Seção                            | Propósito                                                                      |
|---|--------------|----------------------------------|--------------------------------------------------------------------------------|
| 1 | `#hero`      | Hero                             | Headline + duas organizações lado a lado (Diretoria de Operação · Produtos)    |
| 2 | `#shift`     | Virada v1 → v2                   | Antes (FlutterFlow/Mulesoft) vs depois (TypeScript end-to-end)                 |
| 3 | `#tenancy`   | Multi-tenancy                    | Diagrama hierárquico interativo: Org → Cliente → Team → Project                |
| 4 | `#permissions` | RBAC                           | Matriz de permissões por perfil (Operações, Liderança, Compliance, Diretoria)  |
| 5 | `#features`  | Funcionalidades                  | 5 cards: Chat Zello, Audit log, Execuções, Sprints/Metas/Custos, Dashboards    |
| 6 | `#stack`     | Stack & engenharia               | Frontend/Backend/Dados/IA + bloco MCP + snippet de código                      |
| 7 | `#roadmap`   | Roadmap                          | 5 marcos: Q1/2026 done, Q2/2026 now, Q3/2026 next, Q4/2026, 2027              |
| 8 | `#devstory`  | Como foi feito                   | 4 stat cards + fluxo de trabalho + 2 depoimentos                               |
| 9 | `#cta`       | CTA final                        | "Bora ver o SGO funcionando?" → botão "Vamos lá?"                              |
| 10| `footer`     | Footer                           | Links + contato + assinatura Zello                                             |

Nav fixo no topo (glass blur). Links de âncora rolam suavemente.

---

## 5. Design tokens

Todos derivados de `frontend-sgo/design-system.md`. Use como CSS custom properties, Tailwind theme extension, ou tokens nativos da stack escolhida.

### 5.1 Cores — Brand (coral)

```
brand-50   #FFF4F1
brand-100  #FFE3DB
brand-200  #FFC7B8
brand-300  #FFA089
brand-400  #FB7E62
brand-500  #F4694D   ← primária
brand-600  #DE583E
brand-700  #BA4732
brand-800  #8E3729
brand-900  #61261F
```

### 5.2 Cores — Accent (teal mint)

```
accent-300  #74F2DD
accent-400  #43DFC7   ← accent dark theme
accent-500  #1EC7AF
accent-600  #16A18E   ← accent light theme
accent-700  #127D6F
```

### 5.3 Neutros

```
neutral-0    #FFFFFF
neutral-50   #FBFAFC
neutral-100  #F5F3F7
neutral-200  #EBE7EE
neutral-300  #D9D2DE
neutral-400  #B5ACBE
neutral-500  #8D8498
neutral-600  #6D6676
neutral-700  #524C5B
neutral-800  #342F3D
neutral-900  #231F2B
neutral-950  #17131D
```

### 5.4 Tema dark (default)

```
--bg:            #0F0C14
--bg-elevated:   #17131D
--surface:       #1E1826
--surface-2:     #231F2B
--surface-3:     #2B2533
--border:        #2E2838
--border-strong: #3D3548
--fg:            #F5F3F7
--fg-soft:       #D9D2DE
--fg-muted:      #8D8498
--fg-dim:        #6D6676
--primary:       brand-500
--accent:        accent-400
```

### 5.5 Tema light

```
--bg:            #FBFAFC
--bg-elevated:   #FFFFFF
--surface:       #FFFFFF
--surface-2:     #F5F3F7
--surface-3:     #EBE7EE
--border:        #EBE7EE
--border-strong: #D9D2DE
--fg:            #231F2B
--fg-soft:       #524C5B
--fg-muted:      #6D6676
--fg-dim:        #8D8498
--primary:       brand-500
--accent:        accent-600
```

### 5.6 Tipografia

- **Display / headings:** `Manrope` 700/800, `letter-spacing: -0.02em` (até -0.03em em hero).
- **Body / UI:** `Inter` 400/500/600, `font-feature-settings: 'cv02','cv03','cv04','cv11','ss01'`.
- **Mono / código / labels técnicos:** `JetBrains Mono` 400/500/600.

Escala usada (clamp para responsivo):
- H1 hero: `clamp(48px, 7vw, 96px)` · line-height 0.98
- H2 seção: `clamp(36px, 5vw, 64px)` · line-height 1.05
- H3 card: `clamp(20px, 2.2vw, 26px)`
- Body: 16px · line-height 1.6
- Lede: `clamp(17px, 1.6vw, 21px)` · line-height 1.55
- Mono small: 10.5–12px · letter-spacing 0.04–0.08em

### 5.7 Espaçamento e layout

- `--section-py: clamp(80px, 10vw, 144px)` (padding vertical das seções)
- `--container-px: clamp(20px, 3vw, 48px)` (padding horizontal)
- `--max-w: 1440px` (largura máxima do container)

### 5.8 Radii

```
--r-sm:  8px
--r-md:  12px
--r-lg:  16px
--r-xl:  20px
--r-2xl: 28px
```

### 5.9 Densidade

Toggle `[data-density="compact"]` reduz `--section-py` para `clamp(56px, 7vw, 88px)`.

---

## 6. Comportamentos e interações

### 6.1 Theme toggle
- Estado em `localStorage` (ou cookie, se SSR).
- Aplicado em `<html data-theme="dark|light">`.
- Disponível em **dois lugares**: ícone sun/moon no nav e segmented control no painel Tweaks.

### 6.2 Reveal on scroll
- Elementos com `.reveal` ganham `.in` quando entram no viewport.
- `IntersectionObserver` com `threshold: 0.12`, `rootMargin: '0px 0px -40px 0px'`.
- Animação: fade + translateY(18→0), `cubic-bezier(.2,.7,.2,1)` 700ms.

### 6.3 Multi-tenancy (seção 3) — interativo
- 4 níveis (1 Organização · 2 Cliente · 3 Team · 4 Project) em coluna.
- `onMouseEnter`/`onFocus`/`onClick` → estado `active` → painel lateral troca conteúdo + chave `orgId/clientId/teamId/projectId`.

### 6.4 RBAC (seção 4) — matriz
- Grid de perfis × features.
- Células com 3 estados: `on` (•), `partial` (◐), `off` (◯) — cores: accent / brand / muted.

### 6.5 Nav fixo
- Posição: `position: sticky; top: 16px;` centralizado, glass blur (`backdrop-filter: blur(20px)`).
- Encolhe (background mais opaco) após `scrollY > 80px`.

### 6.6 Painel Tweaks (opcional em prod)
- Pode ser removido em produção; existia para iterar durante o design.
- Se mantido (admin only?): toggles de tema e densidade.

---

## 7. Conteúdo (copy)

**Toda a copy está em português** e deve ser mantida exatamente como no protótipo. Pontos críticos:

- Hero headline: "Uma plataforma. **Múltiplas organizações.**" (a segunda linha com `--accent-word` em accent color)
- CTA principal: "Vamos lá?" (em vez de "Agendar demo" ou "Saiba mais")
- Tom: técnico, direto, sem floreio. Frases curtas. Verbos no presente. Português do Brasil.

Ver os arquivos `.jsx` para o texto completo de cada bloco — está hardcoded e revisado.

### 7.1 Roadmap (estados visuais)

| Quarter   | State  | Visual                                       |
|-----------|--------|----------------------------------------------|
| Q1/2026   | `done` | Dot apagado, texto em `--fg-muted`           |
| Q2/2026   | `now`  | Dot accent pulsante, texto em `--accent`     |
| Q3/2026   | `next` | Dot outlined em brand                        |
| Q4/2026   | (none) | Dot neutro                                   |
| 2027      | (none) | Dot neutro                                   |

### 7.2 Depoimentos (seção 8)

- **Luiz Felipe** — texto definitivo (ver `components/devstory.jsx`).
- **Philipe Firmo** — **placeholder**. Substituir quando recebido.

---

## 8. Imagens / Assets

- **Sem imagens raster.** Tudo é SVG inline, gradientes CSS ou texto.
- **Logo SGO** (`<LogoSGO />` em `components/intro.jsx`): combo de SVG mark + wordmark "SGO" em Manrope 800.
- **Logo Zello** (`<ZelloMark />`): dot + texto "zello" em Manrope.
- Fontes: Google Fonts — `Manrope` (400–800), `Inter` (400–700), `JetBrains Mono` (400–600).

Em produção, preferir auto-hospedar as fontes via `next/font` (ou equivalente) para evitar CLS e dependência externa.

---

## 9. Acessibilidade

- Contraste mínimo AA em ambos os temas.
- `prefers-reduced-motion` deve desligar a animação de reveal e o pulse do dot do roadmap (não está implementado no protótipo — favor implementar em prod).
- Todos os botões interativos do diagrama multi-tenant já têm `role="tab"` e `aria-selected`.
- Nav: links com foco visível (ring brand).

---

## 10. SEO / metadata (recomendações para produção)

```html
<title>SGO v2 — Uma plataforma. Múltiplas organizações.</title>
<meta name="description" content="SGO v2 — plataforma SaaS multi-tenant de gestão organizacional, construída pela Zello.">
<meta property="og:title" content="SGO v2">
<meta property="og:description" content="Uma plataforma. Múltiplas organizações.">
<meta property="og:image" content="/og-sgo.png"> <!-- gerar 1200×630 a partir do hero -->
<meta name="theme-color" content="#0F0C14">
```

Hreflang: `pt-BR`.

---

## 11. Arquivos neste pacote

```
Site SGO.html                    ← ponto de entrada (carrega React + Babel + componentes)
styles.css                       ← tokens + estilos globais + estilos de seções 1–7,9
devstory.css                     ← estilos da seção 8 (Como foi feito)
app.jsx                          ← orquestrador (estado, theme, observer, render)
tweaks-panel.jsx                 ← painel de tweaks (descartável em prod)
components/
  intro.jsx                      ← Nav · Hero · Shift
  architecture.jsx               ← MultiTenancy · RBAC
  product.jsx                    ← Features · Stack · Roadmap · CTA · Footer
  devstory.jsx                   ← DevStory
```

Abrir `Site SGO.html` em um servidor estático (`npx serve`) para ver o protótipo rodando em ambos os temas.

---

## 12. Sugestão de implementação (Next.js + Tailwind)

1. **Configurar tokens** — copiar a paleta brand/accent/neutral para `tailwind.config.ts` em `theme.extend.colors`. CSS variables dos temas dark/light em `globals.css` com `[data-theme]` selectors.
2. **Importar fontes** com `next/font/google` (`Manrope`, `Inter`, `JetBrains_Mono`).
3. **Quebrar em componentes** seguindo a divisão acima (`<Hero>`, `<Shift>`, `<MultiTenancy>`, ...). Manter o conteúdo em arrays/objetos como nos `.jsx` originais.
4. **Substituir** `IntersectionObserver` por um hook `useReveal()` ou usar `framer-motion`'s `whileInView`.
5. **Recriar** o snippet de código da seção Stack com syntax highlighting real (shiki ou prism), em vez dos spans coloridos manuais.
6. **Acessibilidade** — adicionar `prefers-reduced-motion` e `aria-live` onde necessário.
7. **Lighthouse target** — 95+ em todas as métricas. Atenção a LCP no hero (preconnect das fontes, font-display swap).

---

**Dúvidas?** Volte ao protótipo HTML — ele é a fonte da verdade visual. Toda decisão de design está materializada nos `.jsx` e nos arquivos `.css`.
