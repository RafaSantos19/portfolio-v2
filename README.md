# Portfolio V2

Portfólio de Rafael Santos em Next.js, React e TypeScript. A direção de produto e as decisões estão em [`docs/PORTFOLIO_V2_PROJECT_CONTEXT.md`](docs/PORTFOLIO_V2_PROJECT_CONTEXT.md).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`; a raiz redireciona para `/pt`. Também há `/en`.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Organização

- `src/app/[locale]/(site)`: páginas e componentes próprios da Home.
- `src/components`: componentes de layout e controles reutilizados.
- `src/content/pages`: conteúdo estruturado por idioma.
- `src/content/projects` e `src/content/writing`: locais reservados para metadados e MDX, após escolha do processador.
- `src/i18n/messages`: textos curtos de interface.
- `src/styles/tokens`: tokens primitivos e semânticos de cor, tipografia, espaço e movimento.
- `src/config`: dados do site e rotas por ID.

Projetos, artigos, currículo e links sociais dependem de conteúdo real. Edite `src/config/site.ts` para adicionar canais de contato. Os diretórios de conteúdo longo estão preparados, mas nenhum case study ou post fictício foi publicado.
