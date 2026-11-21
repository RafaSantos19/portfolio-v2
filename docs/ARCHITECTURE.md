# Arquitetura

Atualizado em **2026-11-21**. Estado: primeira transposição das quatro páginas do wireframe; conteúdo e design em evolução.

## Base e rotas

A base existente foi preservada: Next.js 16.4.2, React 19.3, TypeScript strict, App Router e CSS Modules. Nenhuma dependência foi adicionada. O shadcn/ui pode ser avaliado quando surgir um componente complexo que justifique sua adoção.

`src/app/[locale]/layout.tsx` valida o idioma, declara metadados, carrega as fontes locais e inicializa a aparência. `generateStaticParams` gera `/pt` e `/en`; `/` redireciona para `/pt` em `next.config.ts`.

A troca de idioma preserva o caminho e usa navegação de documento para reinicializar o idioma e os scripts do root layout em conjunto. A navegação entre páginas do mesmo idioma usa `next/link`.

O layout `(site)` monta cabeçalho, um único `main`, conteúdo da página, contato e rodapé. Cada página compõe as seções necessárias. Não há um componente genérico que tente representar todas as páginas.

As rotas de detalhes `/work/[slug]` e `/writing/[slug]` aguardam conteúdo real e a escolha do processador de MDX.

## Responsabilidades

| Camada | Responsabilidade | Exemplos |
| --- | --- | --- |
| `app` | Rotas, metadados e composição | Home, Work, About, Writing |
| `components/ui` | Controles sem conteúdo de negócio | `ButtonLink`, `FilterChips` |
| `components/layout` | Estrutura e preferências globais | `PageContainer`, `SiteHeader`, `SiteFooter` |
| `components/shared` | Composições usadas por várias páginas | `SectionHeading`, `PageIntro`, `MediaFrame`, `PrincipleList`, `ContactCta`, `SocialLinks` |
| `features/projects` | Apresentação e filtragem de projetos | `ProjectCard`, `ProjectGrid`, `ProjectCollection`, `ProjectArchive` |
| `features/writing` | Listagem, categorias e agrupamento de textos | `ArticleList`, `ArticleCollection` |
| `features/experience` | Histórico e alternância trabalho/formação | `ExperienceSection`, `ExperienceTabs` |
| `content` | Conteúdo tipado e traduções editoriais | `getHomeContent`, `getAboutContent`, `getProjects`, `getArticles` |
| `i18n` | Idiomas, URLs e mensagens curtas | `localePath`, `getMessages` |
| `styles` | Tokens, reset e fontes | cores semânticas, espaçamento, tipografia |
| `config` | Dados globais e navegação | `siteConfig`, `navigation` |

Hero, assinatura de processo e capacidades continuam locais à Home. Um componente só deve ser promovido a compartilhado quando existir reutilização ou responsabilidade independente clara.

## Correspondência com o wireframe

| Fonte | Implementação |
| --- | --- |
| `Main.dc.html` | Hero + ProcessSignature + ProjectGrid + ExperienceSection + Capabilities + ArticleList |
| `Work.dc.html` | PageIntro + ProjectCollection + ProjectArchive |
| `About.dc.html` | Apresentação com MediaFrame + PrincipleList + ExperienceSection + seção atual |
| `Writing.dc.html` | PageIntro + ArticleCollection, com ArticleList reutilizada na Home |
| Navegação, CTA e rodapé repetidos | Layout compartilhado |
| `shared.css` e estilos inline | Tokens semânticos e CSS Modules |
| Inputs ocultos de tema/paleta | Controles React e atributos no `html` |
| Runtime `_runtime/` | Substituído pelo Next.js/React instalado; não é importado |

## Server e Client Components

Páginas, layouts e seções estáticas são Server Components. Os limites cliente são os controles de aparência/idioma, navegação ativa, filtros e abas de experiência.

A coleção de projetos e a coleção de textos recebem dados serializáveis do servidor e filtram em memória. Seus componentes de apresentação entram no bundle cliente somente quando importados por essas coleções. Na Home, as mesmas apresentações são renderizadas pelo servidor.

`ExperienceSection` envia painéis já compostos no servidor para `ExperienceTabs` por props. A aba cuida apenas de seleção, visibilidade e teclado.

## Conteúdo e publicação

- JSON guarda navegação, labels e mensagens da interface.
- TypeScript guarda os textos estruturados e os dados das páginas.
- IDs, stacks e categorias ficam separados das traduções em projetos e textos.
- Projetos usam `Publication`: `draft` não aceita `href`; `published` exige um destino.
- Artigos publicados também exigem `publishedAt` em ISO e `readingMinutes`. Rascunhos não aceitam esses campos.
- Prévias são identificadas e não recebem links que apontem para `#` ou páginas inexistentes.
- Datas de experiência vêm do wireframe e continuam sujeitas a revisão, sinalizada na interface.
- O arquivo de experimentos é uma prévia visual, não uma lista de entregas verificadas.

Para publicar conteúdo, revise os dados e implemente ou configure um destino real antes de alterar seu status. A existência de um modelo para publicações não significa que o renderizador de conteúdo longo esteja implementado.

## Aparência

`src/lib/appearance.ts` concentra validação, leitura, escrita e assinatura de mudanças. Tema e paleta são aplicados ao `html`, com persistência em `localStorage`. Um script `beforeInteractive` restaura a preferência antes da hidratação. A indisponibilidade de storage não impede os controles de funcionar.

Cabeçalho e rodapé usam `useSyncExternalStore` e refletem a mesma seleção. Eventos `storage` mantêm abas do navegador sincronizadas. `suppressHydrationWarning` é restrito ao `html`, onde o script pode alterar atributos antes da hidratação.

## Como alterar

| Necessidade | Local principal |
| --- | --- |
| Texto da Home | `src/content/pages/home/{pt-BR,en-US}.ts` |
| Biografia, experiência e informações atuais | `src/content/pages/about/index.ts` |
| Abertura de Projetos/Textos | `src/content/pages/collections.ts` |
| Projetos e experimentos | `src/content/projects/index.ts` |
| Pautas/artigos | `src/content/writing/index.ts` |
| Labels, filtros e mensagens | `src/i18n/messages/{pt-BR,en-US}.json` |
| Links, retrato, currículo e stack | `src/config/site.ts` |
| Paletas e cores | `src/styles/tokens/colors.css` |
| Composição de uma página | Seu `page.tsx` e componentes locais |
| Aparência de um componente | Seu CSS Module |

Imagens locais podem ser colocadas em `public/images/` e referenciadas por `{ src: "/images/arquivo.webp", alt: "Descrição objetiva" }`. `MediaFrame` usa `next/image` e exibe uma reserva pontilhada quando não há imagem. URLs externas exigem `images.remotePatterns` em `next.config.ts`.

## Verificação

Execute `npm run typecheck` e `npm run build`. Verifique as oito rotas, filtros, abas com teclado, persistência e sincronização de aparência, idiomas e larguras de 320px até desktop. Consulte o changelog para evidências da última entrega e o roadmap para verificações ainda pendentes.
