# Portfolio V2 — Project Context & Living Documentation

> Documento vivo para orientar o desenvolvimento do **Portfolio V2**, registrar decisões técnicas e servir como contexto para agentes de IA.
>
> **Regra principal:** este arquivo deve ser atualizado conforme decisões importantes forem tomadas. Não duplicar informação desnecessária; registrar apenas o que ajuda a manter consistência de produto, design e implementação.

---

## 1. Visão do Projeto

O Portfolio V2 é um site pessoal/profissional com três objetivos simultâneos:

1. **Apresentação profissional** para recrutadores, Tech Leads e hiring managers.
2. **Vitrine de trabalho** com projetos, case studies e escrita técnica.
3. **Canal comercial** para possíveis clientes de desenvolvimento de software.

O site **não deve parecer apenas um currículo online**.

A experiência deve transmitir:

- clareza;
- competência técnica;
- pensamento de produto;
- cuidado visual;
- personalidade;
- profundidade quando o usuário decide explorar.

Princípio de produto:

> **Simples de usar, sofisticado de observar e profundo quando explorado.**

---

## 2. Público-Alvo

### Primário

- Tech Recruiters;
- Tech Leads;
- Hiring Managers;
- Desenvolvedores responsáveis por processos seletivos;
- Potenciais clientes de software.

### Secundário

- Outros desenvolvedores;
- Pessoas interessadas em artigos e estudos;
- Possíveis colaboradores;
- Pessoas que encontrem o site através de busca orgânica.

---

## 3. Posicionamento

A comunicação principal deve evitar descrições genéricas como:

> “Desenvolvedor apaixonado por tecnologia.”

Direção atual:

> **I build web products and internal systems.**

Complemento:

> **Full Stack Developer working across requirements, architecture and implementation.**

A proposta deve comunicar que o trabalho não começa no código.

Fluxo mental desejado:

```text
Problem
  ↓
Requirements
  ↓
Architecture
  ↓
Implementation
  ↓
Delivery
```

Narrativa profissional:

```text
Support / Infrastructure
        ↓
Automation
        ↓
Development
        ↓
Web Systems
        ↓
Architecture / Product
```

---

## 4. Princípios de Design

### 4.1 Clareza

Em poucos segundos, um visitante deve conseguir responder:

- Quem é Rafael?
- O que ele faz?
- Que tipo de problema resolve?
- Onde trabalhou?
- Quais projetos construiu?
- Como entrar em contato?

### 4.2 Simplicidade intencional

Cada elemento visual precisa justificar sua existência através de pelo menos um dos seguintes:

- hierarquia;
- navegação;
- compreensão;
- feedback;
- identidade;
- interação.

Evitar adicionar componentes apenas para demonstrar conhecimento de bibliotecas.

### 4.3 Criatividade com restrição

O efeito “wow” deve vir de:

- composição;
- tipografia;
- motion;
- detalhes;
- mídia dos projetos;
- microinterações;
- consistência visual.

Evitar:

- excesso de 3D;
- WebGL sem necessidade;
- grandes efeitos decorativos;
- cursor customizado sem função;
- scroll hijacking;
- loading screens longas;
- animação em todos os elementos;
- visual SaaS genérico.

### 4.4 Conteúdo > tecnologia

A tecnologia deve aparecer como meio para resolver problemas.

Evitar apresentar a Home como uma parede de logos.

---

## 5. Referências de Direção

As referências não devem ser copiadas visualmente. Cada uma serve para um aspecto específico.

### Ted — `tedawf.com`

Referência para:

- clareza;
- baixa densidade visual;
- experiência profissional;
- projetos;
- writing;
- ausência de distrações.

### Jason Cameron — `jasoncameron.dev`

Referência para:

- personalidade técnica;
- estética Unix-like;
- linguagem utilitária;
- sensação de “developer workspace”.

### Binil — `thegr8binil.me`

Referência para:

- motion;
- acabamento;
- apresentação de case studies;
- problema → decisão → trade-off → resultado;
- abordagem comercial.

### Paras — `parasshenmare.vercel.app`

Referência para:

- capabilities;
- apresentação voltada a clientes;
- prova social futura;
- clareza comercial.

### Duy — `duyle.dev`

Referência para:

- microinterações;
- “wow” discreto;
- pequenos momentos interativos;
- UI com personalidade sem exagero.

---

## 6. Arquitetura da Home

A estrutura atual está aprovada como base.

```text
Navbar
↓
Hero
↓
Interactive Signature
↓
Selected Work
↓
Experience
↓
Capabilities + Compact Tech Stack
↓
Recent Writing
↓
Final CTA
↓
Footer
```

### 6.1 Navbar

Direção:

```text
Rafael.   Home   Work   About   Writing      Let's Talk ↗   Theme   EN/PT
```

Requisitos:

- fácil de entender;
- sticky;
- CTA comercial discreto;
- idioma e tema visualmente secundários;
- movimento suave ao rolar.

### 6.2 Hero

Conteúdo-base:

```text
Hey, I'm Rafael.

I build web products
and internal systems.

Full Stack Developer working across
requirements, architecture and implementation.

[ See my work ] [ Resume ↗ ]

GitHub · LinkedIn · Email

Available for selected freelance projects.
São Paulo, Brazil.
```

### 6.3 Interactive Signature

Objetivo: criar um pequeno momento memorável.

Estrutura:

```text
Requirements → Architecture → Backend → Frontend → Delivery
```

Direção de interação:

- nodes conectados;
- progressão visual;
- ativação por hover ou entrada no viewport;
- sem loop agressivo;
- duração curta;
- suporte a `prefers-reduced-motion`.

### 6.4 Selected Work

É a seção de maior importância após o Hero.

Cada projeto deve mostrar:

- contexto;
- problema;
- mídia forte;
- descrição;
- role;
- context;
- stack;
- acesso ao case study.

Evitar cards genéricos repetidos.

### 6.5 Experience

Compacta.

Estrutura:

```text
Year
Company
Role
Short description
```

Pode utilizar:

```text
[ Work ] [ Education ]
```

A Home não deve reproduzir o CV inteiro.

### 6.6 Capabilities

Conteúdo inicial:

1. Web Applications
2. Internal Tools & Systems
3. Frontend & Design Systems
4. Integrations & Automation

A linguagem deve falar sobre **o que pode ser entregue**, não apenas ferramentas.

### 6.7 Recent Writing

Layout editorial.

Cada entrada:

- título;
- descrição curta;
- categorias;
- data;
- tempo de leitura.

Não mostrar views inicialmente.

### 6.8 Final CTA

Direção atual:

> **Have a problem worth solving?**

CTA:

> **Let's talk ↗**

Tom comercial, porém sem parecer uma landing page de agência.

---

## 7. Stack Técnica

### Base

- Next.js
- TypeScript
- React

### Styling

Direção atual:

- CSS Modules;
- CSS Variables;
- design tokens;
- CSS global apenas para foundation/reset/tokens.

### Motion

- CSS para efeitos simples;
- Motion for React para animações de UI;
- GSAP apenas para sequências mais específicas/complexas.

### Conteúdo

- JSON → textos simples de UI / labels;
- TypeScript → conteúdo estruturado de páginas;
- MDX → posts e case studies.

### Deploy

Preferência inicial:

- Vercel.

### CMS

**Não é requisito inicial.**

Payload CMS pode ser integrado futuramente se houver necessidade real.

---

## 8. Estrutura de Pastas

Direção atual:

```text
src/
├── app/
│   └── [locale]/
│       └── (site)/
│           ├── _components/
│           │   ├── hero.tsx
│           │   ├── process-signature.tsx
│           │   ├── experience.tsx
│           │   ├── capabilities.tsx
│           │   └── contact-cta.tsx
│           │
│           ├── work/
│           ├── writing/
│           ├── about/
│           ├── layout.tsx
│           └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── shared/
│   └── motion/
│
├── features/
│   ├── projects/
│   └── writing/
│
├── content/
│   ├── pages/
│   ├── projects/
│   └── writing/
│
├── i18n/
│   ├── messages/
│   ├── config.ts
│   └── types.ts
│
├── styles/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── radius.css
│   │   └── motion.css
│   │
│   ├── reset.css
│   └── globals.css
│
├── lib/
│   ├── content/
│   ├── motion/
│   │   ├── gsap/
│   │   ├── config.ts
│   │   ├── variants.ts
│   │   └── easings.ts
│   ├── seo/
│   └── utils/
│
├── hooks/
│   └── use-reduced-motion.ts
│
├── config/
│   ├── navigation.ts
│   └── site.ts
│
└── types/
```

---

## 9. Regras de Organização de Componentes

### `components/ui`

Primitivos sem contexto de negócio.

Exemplos:

```text
Button
Link
Tag
Container
Heading
Divider
IconButton
```

Regra:

> Um componente de UI não deve saber nada sobre projetos, artigos, Rafael ou experiência profissional.

### `components/layout`

Componentes estruturais globais:

```text
Navbar
Footer
PageContainer
Section
```

### `components/shared`

Componentes compostos e reutilizados em mais de uma página:

```text
ProjectPreview
ArticlePreview
SocialLinks
StackList
SectionHeading
```

### Componentes locais de página

Se um componente só é usado por uma página:

```text
app/[locale]/(site)/_components/
```

Não mover automaticamente para `components/`.

Regra:

> **Promover para shared somente quando a reutilização existir de fato.**

### `features`

Utilizar para domínios com comportamento próprio:

```text
projects
writing
```

Exemplo:

```text
features/projects/
├── components/
├── queries.ts
└── types.ts
```

---

## 10. Design Tokens

### 10.1 Filosofia

Separar:

```text
Primitive Tokens
↓
Semantic Tokens
↓
Components
```

Componentes não devem consumir hex diretamente.

Evitar:

```css
color: #17181a;
```

Preferir:

```css
color: var(--text-primary);
```

---

## 11. Paleta Atual

Direção:

```text
Paper
Ink
Rust
Unix Olive
Sand
```

Semântica:

- **Rust** → ação / humano / identidade;
- **Olive** → sistema / tecnologia / processo;
- **Neutros** → maior parte da interface.

Distribuição aproximada:

```text
85% neutros
12% rust
3% olive
```

### Tokens primitivos

```css
:root {
  /* Neutral */
  --paper-50: #faf8f3;
  --paper-100: #f3f0e8;
  --paper-200: #e4ded2;
  --paper-300: #d8d1c4;

  --ink-950: #17181a;
  --ink-800: #343531;
  --ink-600: #66675f;
  --ink-400: #92938a;

  --rule-300: #d8d2c7;
  --rule-400: #c6c0b4;
  --rule-600: #918b81;

  /* Action / Brand */
  --rust-100: #ead4c5;
  --rust-500: #b84f1d;
  --rust-600: #9d4017;
  --rust-700: #813314;

  /* System / Technical */
  --olive-100: #dce1d5;
  --olive-400: #78886a;
  --olive-500: #5f6f52;
  --olive-600: #4d5d43;
}
```

### Tokens semânticos — Light

```css
:root {
  --bg-page: var(--paper-100);
  --bg-section: var(--paper-200);
  --bg-surface: var(--paper-50);
  --bg-surface-strong: var(--paper-300);

  --text-primary: var(--ink-950);
  --text-secondary: var(--ink-600);
  --text-tertiary: var(--ink-400);

  --border-subtle: var(--rule-300);
  --border-default: var(--rule-400);
  --border-strong: var(--rule-600);

  --action: var(--rust-500);
  --action-hover: var(--rust-600);
  --action-active: var(--rust-700);
  --action-soft: var(--rust-100);
  --action-text: #ffffff;

  --signal: var(--olive-500);
  --signal-hover: var(--olive-600);
  --signal-soft: var(--olive-100);

  --focus-ring: var(--olive-400);
}
```

### Tokens semânticos — Dark

```css
[data-theme="dark"] {
  --bg-page: #151715;
  --bg-section: #20231f;
  --bg-surface: #1a1c19;
  --bg-surface-strong: #292d27;

  --text-primary: #eeece4;
  --text-secondary: #a5a79c;
  --text-tertiary: #767a70;

  --border-subtle: #30342e;
  --border-default: #3d423a;
  --border-strong: #5c6257;

  --action: #df6a2e;
  --action-hover: #ef7a3c;
  --action-active: #f38a51;
  --action-soft: #47291d;
  --action-text: #151715;

  --signal: #8fa77c;
  --signal-hover: #a4ba91;
  --signal-soft: #283126;

  --focus-ring: #8fa77c;
}
```

---

## 12. Outros Tokens

### Spacing

Usar escala consistente.

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;
}
```

Evitar valores arbitrários sem necessidade.

### Typography

Direção:

```css
:root {
  --font-sans: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;

  --display-sm: clamp(2.5rem, 6vw, 4rem);
  --display-lg: clamp(3.5rem, 8vw, 6rem);
}
```

### Motion

Tokens de duração/easing devem existir em CSS e/ou TS conforme necessidade.

---

## 13. Estratégia de Conteúdo

Não utilizar um único formato para tudo.

### JSON

Usar para:

- labels;
- navegação;
- ações comuns;
- mensagens curtas de UI.

Exemplo:

```text
src/i18n/messages/
├── pt-BR.json
└── en-US.json
```

### TypeScript

Usar para conteúdo estruturado de páginas.

Exemplo:

```text
src/content/pages/home/
├── pt-BR.ts
└── en-US.ts
```

Benefícios:

- tipagem;
- autocomplete;
- validação;
- consistência entre idiomas.

### MDX

Usar para:

- posts;
- case studies;
- conteúdos longos;
- conteúdo versionável em Git.

Exemplo:

```text
src/content/projects/
└── cms-platform/
    ├── meta.ts
    ├── pt-BR.mdx
    └── en-US.mdx
```

---

## 14. Estratégia de Internacionalização

Rotas:

```text
/pt
/en

/pt/work
/en/work

/pt/work/[slug]
/en/work/[slug]

/pt/writing
/en/writing
```

Direção atual:

- idioma faz parte da URL;
- suporte inicial para PT-BR e EN;
- arquitetura deve permitir novos idiomas;
- conteúdo versionado separadamente.

Evitar duplicar dados independentes de idioma.

---

## 15. Conteúdo de Projetos

Dados independentes de tradução devem ficar em `meta.ts`.

Exemplo:

```ts
export const projectMeta = {
  slug: "cms-platform",
  featured: true,

  period: {
    start: "2026-05",
    end: null,
  },

  type: "professional",
  role: "Full Stack Developer",

  stack: [
    "Next.js",
    "Payload CMS",
    "PostgreSQL",
    "Docker",
  ],
};
```

Conteúdo textual fica em MDX.

Estrutura ideal de Case Study:

```text
Project Hero
↓
Context
↓
Problem
↓
My Role
↓
Requirements
↓
Architecture
↓
Key Decisions
↓
Implementation
↓
Challenges / Trade-offs
↓
Result
↓
Lessons Learned
↓
Gallery / Demo
↓
CTA
```

---

## 16. Motion Architecture

### Regra geral

Usar a ferramenta mais simples que resolve o problema.

```text
CSS
↓
Motion
↓
GSAP
```

### CSS

Usar para:

- hover;
- focus;
- color transitions;
- underline;
- transform simples.

### Motion for React

Usar para:

- entrance/exit;
- stagger;
- layout transitions;
- state transitions;
- gestures;
- pequenas interações React.

Estrutura:

```text
components/motion/
├── reveal.tsx
├── fade-in.tsx
├── stagger.tsx
└── page-transition.tsx
```

Configuração:

```text
lib/motion/
├── config.ts
├── variants.ts
└── easings.ts
```

### GSAP

Usar apenas quando houver necessidade real:

- timelines;
- sequências;
- SVG;
- scroll choreography;
- animações complexas.

Estrutura:

```text
lib/motion/gsap/
├── setup.ts
├── timelines.ts
└── utils.ts
```

### Server vs Client Components

Não usar `"use client"` globalmente.

Páginas/layouts permanecem Server Components por padrão.

Apenas componentes que usam:

- Motion;
- GSAP;
- browser APIs;
- estado/interação;

devem virar Client Components.

---

## 17. Acessibilidade de Motion

Obrigatório respeitar:

```text
prefers-reduced-motion
```

Direção:

```text
hooks/
└── use-reduced-motion.ts
```

Nenhum conteúdo importante deve depender de animação para ser compreendido.

---

## 18. Configuração Global

### `config/site.ts`

Deve centralizar:

```ts
export const siteConfig = {
  name: "Rafael Santos",
  url: "...",

  social: {
    github: "...",
    linkedin: "...",
    email: "...",
  },

  locales: ["pt-BR", "en-US"],
  defaultLocale: "pt-BR",
};
```

### `config/navigation.ts`

Definir rotas por ID.

Não colocar labels diretamente.

Exemplo:

```ts
export const navigation = [
  { id: "home", href: "/" },
  { id: "work", href: "/work" },
  { id: "about", href: "/about" },
  { id: "writing", href: "/writing" },
];
```

Os labels vêm da camada de i18n.

---

## 19. Convenções de Código

### Geral

- TypeScript strict;
- preferir Server Components;
- Client Components somente quando necessário;
- evitar abstração antecipada;
- evitar componentes gigantes;
- evitar prop drilling excessivo;
- preferir composição.

### CSS

- consumir tokens semânticos;
- evitar hex dentro de componentes;
- evitar valores arbitrários quando já existir token;
- CSS Module por componente quando necessário;
- animações simples em CSS.

### Componentes

Regra:

> Extraia um componente quando houver reutilização real, complexidade própria ou ganho claro de legibilidade.

Não criar componente para cada `<div>`.

### Naming

Preferência:

```text
PascalCase → componentes React
camelCase  → funções/variáveis
kebab-case → arquivos/pastas
```

Exemplo:

```text
project-preview.tsx
ProjectPreview
```

---

## 20. Regras para Agentes de IA

Agentes trabalhando neste projeto devem seguir estas regras.

### 20.1 Antes de alterar código

1. Ler este documento.
2. Identificar a área afetada.
3. Preservar decisões existentes.
4. Não introduzir dependências sem necessidade clara.
5. Não alterar arquitetura aprovada sem justificar.

### 20.2 UI

Não introduzir:

- visual SaaS genérico;
- glassmorphism;
- gradientes decorativos;
- grandes sombras;
- excesso de cards;
- rounded corners arbitrários;
- animações desnecessárias.

### 20.3 Design Tokens

Nunca adicionar hex diretamente em componentes se já existir token adequado.

Se um novo papel de cor for necessário:

1. verificar se um token semântico existente resolve;
2. se não resolver, criar token semanticamente nomeado;
3. evitar nomear tokens pela página/componente.

Ruim:

```css
--hero-orange
```

Bom:

```css
--action
```

### 20.4 Conteúdo

Não hardcodar texto traduzível dentro de componentes quando a informação pertence à camada de conteúdo/i18n.

### 20.5 Motion

Antes de adicionar GSAP, perguntar:

> CSS ou Motion resolvem isso de forma simples?

GSAP deve ser usado apenas se a resposta for não.

### 20.6 Reutilização

Não criar abstrações “porque talvez sejam úteis no futuro”.

Promover componentes somente quando existir reutilização real.

### 20.7 Alterações relevantes

Se uma mudança introduzir uma decisão arquitetural duradoura, adicionar registro na seção **Decision Log**.

---

## 21. Decision Log

Registrar decisões relevantes.

Formato:

```text
### DEC-XXX — Título

Date:
Status:

Context:
...

Decision:
...

Consequences:
...
```

---

### DEC-001 — Next.js como framework principal

**Status:** Accepted

**Decision:**

Utilizar Next.js + React + TypeScript.

**Reason:**

- experiência prévia;
- bom suporte a SEO;
- App Router;
- suporte a conteúdo estático e dinâmico;
- integração futura com CMS;
- rotas internacionalizadas.

---

### DEC-002 — Conteúdo versionado no repositório

**Status:** Accepted

**Decision:**

Manter conteúdo inicialmente no Git através de JSON, TypeScript e MDX.

**Reason:**

- versionamento;
- histórico;
- diffs claros;
- baixo overhead;
- independência de CMS.

---

### DEC-003 — Payload CMS não será requisito inicial

**Status:** Accepted

Payload só será integrado quando houver benefício claro.

---

### DEC-004 — Separar primitive e semantic design tokens

**Status:** Accepted

Componentes devem consumir tokens semânticos.

---

### DEC-005 — Rust + Olive como accents

**Status:** Accepted

Semântica:

```text
Rust → action / human / brand
Olive → system / technical / process
```

---

### DEC-006 — Motion progressivo

**Status:** Accepted

Prioridade:

```text
CSS → Motion → GSAP
```

---

### DEC-007 — Rotas de idioma sem biblioteca adicional

**Date:** 2026-10-16

**Status:** Accepted

**Decision:**

Usar o segmento `[locale]` do App Router para `/pt` e `/en`, com redirecionamento de `/` para `/pt`. Manter labels em JSON e conteúdo estruturado em TypeScript por idioma. Adicionar uma biblioteca de i18n somente se surgir uma necessidade que a estrutura atual não resolva.

---

### DEC-008 — Tema inicial com CSS Variables

**Date:** 2026-10-16

**Status:** Accepted

**Decision:**

Usar tokens semânticos em CSS e `data-theme` no elemento `html`, persistido em `localStorage`. O controle de tema e a troca de idioma são componentes cliente isolados. A tipografia final permanece em aberto; a base usa fontes de sistema temporariamente.

---

## 22. Roadmap Técnico

### Fase 1 — Foundation

- [x] Criar projeto Next.js;
- [x] Configurar TypeScript strict;
- [x] Criar estrutura de diretórios;
- [x] Configurar aliases;
- [x] Criar reset/global styles;
- [x] Criar tokens;
- [x] Configurar temas light/dark;
- [x] Criar configuração de idiomas;
- [x] Criar estrutura base de conteúdo.

### Fase 2 — Layout

- [ ] Navbar;
- [ ] Footer;
- [ ] Container;
- [ ] Section;
- [ ] Typography primitives;
- [ ] Buttons/Links;
- [ ] Responsive grid.

### Fase 3 — Home

- [ ] Hero;
- [ ] Interactive Signature;
- [ ] Selected Work;
- [ ] Experience;
- [ ] Capabilities;
- [ ] Stack;
- [ ] Recent Writing;
- [ ] CTA.

### Fase 4 — Work

- [ ] `/work`;
- [ ] project previews;
- [ ] project metadata;
- [ ] `[slug]`;
- [ ] MDX rendering;
- [ ] gallery;
- [ ] case study layout.

### Fase 5 — Writing

- [ ] `/writing`;
- [ ] posts;
- [ ] `[slug]`;
- [ ] metadata;
- [ ] MDX components;
- [ ] syntax highlighting;
- [ ] reading time.

### Fase 6 — Motion

- [ ] CSS microinteractions;
- [ ] Motion primitives;
- [ ] Hero reveal;
- [ ] Interactive Signature;
- [ ] Project previews;
- [ ] Page transitions;
- [ ] avaliar necessidade real de GSAP.

### Fase 7 — Quality

- [ ] accessibility;
- [ ] keyboard navigation;
- [ ] reduced motion;
- [ ] responsive QA;
- [ ] Lighthouse;
- [ ] metadata;
- [ ] OpenGraph;
- [ ] sitemap;
- [ ] robots;
- [ ] hreflang;
- [ ] analytics.

---

## 23. Status Atual

### Produto

- [x] Objetivo definido;
- [x] públicos principais definidos;
- [x] estrutura da Home definida;
- [x] direção visual definida;
- [x] estratégia de cores definida;
- [x] abordagem de conteúdo definida;
- [x] arquitetura inicial definida.

### Design

- [x] wireframe inicial;
- [x] wireframe refinado;
- [x] direção high-fidelity inicial;
- [ ] revisão de acessibilidade/contraste;
- [ ] mobile;
- [ ] tablet;
- [ ] páginas internas.

### Código

- [x] projeto iniciado;
- [x] foundation;
- [x] tokens;
- [x] i18n inicial;
- [x] estrutura base de conteúdo;
- [ ] componentes;
- [ ] páginas;
- [ ] motion.

---

## 24. Próximas Decisões

Ainda precisam ser definidas:

- [x] versão do Next.js: 16.4.2 (versão já instalada na base);
- [x] estratégia inicial de i18n: segmento `[locale]` sem biblioteca adicional;
- [ ] biblioteca/processador de MDX;
- [ ] tipografia final;
- [ ] estratégia de icons;
- [ ] mecanismo de theme switching;
- [ ] deploy/domain;
- [ ] analytics;
- [ ] syntax highlighting;
- [ ] OpenGraph generation;
- [ ] necessidade futura de CMS.

---

## 25. Prompt Base para Agentes de IA

Ao iniciar uma tarefa neste projeto, usar como premissa:

> Você está trabalhando no Portfolio V2 de Rafael Santos, um portfólio profissional em Next.js + TypeScript voltado tanto a recrutadores quanto a possíveis clientes.
>
> O projeto prioriza clareza, arquitetura limpa, conteúdo versionado, internacionalização, design editorial/Unix-like e motion discreto.
>
> Antes de implementar qualquer alteração:
>
> 1. respeite a estrutura descrita neste documento;
> 2. reutilize componentes existentes quando fizer sentido;
> 3. evite abstração antecipada;
> 4. utilize design tokens semânticos;
> 5. não hardcode conteúdo traduzível;
> 6. mantenha Server Components por padrão;
> 7. use CSS antes de Motion e Motion antes de GSAP;
> 8. preserve acessibilidade e `prefers-reduced-motion`;
> 9. não transforme o site em estética SaaS;
> 10. documente decisões arquiteturais relevantes no Decision Log.
>
> Caso a solicitação contradiga uma decisão documentada, explique o conflito antes de modificar a arquitetura.

---

## 26. Regra de Manutenção deste Documento

Atualizar este documento quando houver mudança em:

- arquitetura;
- stack;
- design system;
- content model;
- i18n;
- motion strategy;
- rotas;
- convenções;
- dependências importantes;
- decisões de produto.

Não atualizar para:

- pequenos ajustes visuais;
- bugfixes;
- mudanças locais sem impacto arquitetural.

Objetivo:

> Este arquivo deve permitir que uma pessoa ou agente de IA entenda rapidamente **o que está sendo construído, por quê e quais restrições devem ser respeitadas**.
