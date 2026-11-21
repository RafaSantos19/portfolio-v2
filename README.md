# Portfolio V2

Portfólio de Rafael Santos em **Next.js 16, React 19 e TypeScript**, transposto das quatro páginas em [`Wireframe/`](Wireframe/). O design é uma base em evolução, com conteúdo, componentes e tokens separados para facilitar mudanças.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. A raiz redireciona para `/pt`; também existe `/en`.

| Página | Português | Inglês |
| --- | --- | --- |
| Início | `/pt` | `/en` |
| Projetos | `/pt/work` | `/en/work` |
| Sobre | `/pt/about` | `/en/about` |
| Textos | `/pt/writing` | `/en/writing` |

```bash
npm run typecheck
npm run build
npm start
```

`npm run lint` permanece disponível. A geração de produção usa Server Components e pré-renderiza as páginas nos dois idiomas.

## O que está implementado

- Home com apresentação, retrato, processo, projetos, experiência, capacidades, tecnologias e textos recentes.
- Projetos com filtros por contexto, composição de destaque e arquivo de experimentos.
- Sobre com apresentação, princípios, abas de trabalho/formação e informações atuais.
- Textos com filtros por assunto e estrutura para agrupar publicações por ano.
- Navegação ativa, troca de idioma preservando a página, tema claro/escuro e três paletas persistidas.
- Layout responsivo, navegação por teclado e suporte a movimento reduzido.
- Fontes Schibsted Grotesk e JetBrains Mono servidas localmente, com licenças em `src/styles/fonts/`.

Projetos, pautas e experimentos são **prévias identificadas como “Em preparação”**. Não há artigos nem estudos de caso publicados. Datas e tempo de leitura só aparecem quando um artigo é publicado. Fotos, currículo e canais reais ainda precisam ser fornecidos em [`src/config/site.ts`](src/config/site.ts); links sem destino não são renderizados.

## Organização

```text
src/
├── app/[locale]/(site)/   # Composição das quatro páginas
├── components/
│   ├── ui/               # Botão de link e filtros sem contexto de negócio
│   ├── layout/           # Container, navegação, rodapé e aparência
│   └── shared/           # Títulos, mídia, princípios, contato e redes
├── features/             # Projetos, textos e experiência
├── content/              # Conteúdo tipado por idioma e metadados
├── i18n/                 # Idiomas e textos curtos da interface
├── styles/               # Reset, tokens e fontes locais
├── lib/                  # Preferências de aparência
└── config/               # Configuração do site e rotas
```

## Documentação viva

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): responsabilidades, componentes e fluxos de alteração.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md): tokens, paletas, fontes e regras de evolução visual.
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md): histórico das entregas e verificações.
- [`docs/ROADMAP.md`](docs/ROADMAP.md): próximos passos e critérios para publicar.
- [`docs/PORTFOLIO_V2_PROJECT_CONTEXT.md`](docs/PORTFOLIO_V2_PROJECT_CONTEXT.md): objetivos, convenções e registro de decisões.

Atualize o changelog em cada entrega relevante e registre decisões duradouras no contexto do projeto. Os HTMLs de `Wireframe/` são a referência original; a aplicação não depende do runtime exportado.
