# Sistema de design em evolução

Versão visual: **0.1 — transposição do wireframe**, em 2026-11-21. A composição inicial está implementada; tipografia, conteúdo e acabamento podem mudar.

## Direção atual

Interface editorial, com tipografia expressiva, linhas de separação, áreas de projeto amplas e metadados monoespaçados. A referência de implementação é a pasta `Wireframe/`, preservada como fonte original.

A página inicial segue: apresentação → processo → projetos → experiência → capacidades e stack → textos → contato. As páginas internas reaproveitam os mesmos elementos visuais, com composição própria.

As imagens pontilhadas são reservas explícitas para mídia real. Não foram criados retratos, screenshots, métricas nem resultados fictícios.

## Tokens

```text
Primitivos → papéis semânticos → componentes
```

| Papel | Tokens |
| --- | --- |
| Superfícies | `--bg-page`, `--bg-section`, `--bg-surface`, `--bg-surface-strong` |
| Texto | `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-accent` |
| Bordas | `--border-subtle`, `--border-default`, `--border-strong` |
| Ações | `--action`, `--action-hover`, `--action-active`, `--action-text`, `--action-soft` |
| Sinais | `--signal`, `--signal-hover`, `--signal-soft` |
| Foco | `--focus-ring` |
| Mídia pendente | `--placeholder-bg`, `--placeholder-dot` |
| Layout | `--page-width`, `--page-gutter`, `--section-space` e escala `--space-*` |
| Tipografia | `--font-sans`, `--font-mono`, `--text-*`, `--display-*` |
| Forma e movimento | `--radius-*`, `--motion-*` |

Cores hexadecimais ficam no arquivo de tokens; componentes consomem papéis semânticos. Antes de criar um token, verifique se o papel já existe. A largura máxima atual é 75rem; títulos, margens e intervalos usam escalas fluidas.

## Paletas e temas

| Paleta | Identidade |
| --- | --- |
| Unix-like, padrão inicial | Papel, tinta, rust e olive |
| Clássica | Neutros com ação em laranja |
| Editorial+ | Neutros quentes com rust e sinal azul esverdeado |

Cada paleta tem tema escuro e claro. A primeira visita abre em Unix-like escuro, conforme a direção atual. A preferência explícita é persistida; a preferência do sistema operacional não é utilizada nesta versão.

Os seletores aparecem no cabeçalho em telas largas e no rodapé em todas as larguras. O tema e o idioma continuam acessíveis no cabeçalho móvel. O encurtamento da navegação ao rolar é progressivo: usa CSS quando o navegador suporta `animation-timeline`.

## Tipografia

Schibsted Grotesk e JetBrains Mono reproduzem a escolha do wireframe. Arquivos WOFF2 latinos e respectivas licenças SIL OFL estão em `src/styles/fonts/`. O Next.js carrega as fontes com `next/font/local`; não há download de fontes no build nem requisição ao Google durante a visita.

`src/styles/fonts.ts` define carregamento, faixas de peso e variáveis. `tokens/typography.css` define os papéis usados pelos componentes. Os arquivos atuais cobrem o conteúdo em português e inglês; novos idiomas podem exigir outros subconjuntos.

## Componentes e comportamento

- Botões de ação têm formato de cápsula; links de texto mantêm sublinhado ou contexto de navegação claro.
- Filtros usam botões reais, `aria-pressed`, contagem por categoria e anúncio do total de resultados.
- As abas de experiência usam `tablist`, `tab`, `tabpanel`, foco móvel e teclas esquerda/direita, Home e End.
- A navegação identifica a página atual com `aria-current="page"`.
- A assinatura de processo responde a hover e foco; as etapas permanecem legíveis sem movimento.
- Estados pendentes são informativos. Não parecem botões habilitados e não abrem destinos inexistentes.

A lista de projetos combina destaque amplo e itens em duas colunas. Artigos usam linhas editoriais. Em telas menores, a composição passa para uma coluna e a assinatura de processo se torna vertical.

## Acessibilidade e responsividade

Foco visível, link para pular ao conteúdo, um `main`, um `h1` por página e controles de pelo menos 44px integram a base. Fontes respeitam unidades relativas. `prefers-reduced-motion` remove animações/transições e a rolagem suave.

A entrega deve ser revisada em 320px, 390px, 768px, 1024px e desktop. A ausência de overflow não substitui revisão visual, auditoria de contraste e testes com leitor de tela. Estes últimos permanecem no roadmap.

## Registrar mudanças de design

1. Defina a necessidade e quais páginas serão afetadas.
2. Altere tokens para decisões globais e CSS Modules para decisões locais.
3. Verifique os dois idiomas, os dois temas e as três paletas.
4. Confira teclado, movimento reduzido e telas pequenas.
5. Registre a entrega em `CHANGELOG.md` e atualize esta especificação se houver uma nova regra.
6. Registre alternativas e consequências no Decision Log quando a decisão for duradoura.

O número da versão visual descreve a evolução da interface. Não significa aprovação final do design nem publicação do site.
