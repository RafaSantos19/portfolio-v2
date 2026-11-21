# Histórico de evolução

Este arquivo registra entregas relevantes e sua validação. Datas usam o calendário do projeto em São Paulo. O histórico Git complementa os detalhes por arquivo.

## 2026-11-21 — v0.1: transposição das quatro páginas do wireframe

### Resultado

A Home parcial e as três páginas provisórias foram substituídas pela composição das páginas `Main`, `Work`, `About` e `Writing` da pasta `Wireframe`. O design permanece em evolução.

### Estrutura e interface

- Layout compartilhado com navegação em cápsula, indicação da rota atual, contato e rodapé.
- Container, botões, filtros, títulos, mídia, princípios e redes reutilizáveis.
- Apresentações de projetos e textos reutilizadas entre Home e páginas de coleção.
- Filtros de projetos por contexto e textos por assunto; artigos podem pertencer a várias categorias.
- Experiência profissional reutilizada em Home/Sobre, com abas trabalho/formação e teclado.
- Conteúdo separado por idioma e metadados independentes de tradução.
- Tema claro/escuro e paletas Unix-like, Clássica e Editorial+, sincronizados e persistidos.
- Fontes Schibsted Grotesk e JetBrains Mono incluídas com suas licenças e carregamento local.
- Layouts fluidos, adaptações móveis, foco visível e movimento reduzido.
- Remoção dos componentes provisórios sem uso. Nenhuma dependência nova.

### Conteúdo

Projetos, pautas e arquivo são prévias sinalizadas. Não foram publicados cases nem artigos fictícios. Formação, imagens, currículo e canais reais continuam pendentes. Datas e descrições da experiência foram transpostas do wireframe e precisam de revisão editorial.

### Decisões

Manter CSS Modules e tokens; adiar shadcn e MDX até existir necessidade concreta; representar publicação explicitamente; compartilhar componentes com reutilização real. Ver DEC-009 a DEC-012 no contexto do projeto.

### Validação

- `npm run typecheck`: aprovado.
- `npm run build`: aprovado; oito rotas de conteúdo pré-renderizadas, além das rotas técnicas do Next.js. O alerta de segurança descrito abaixo permanece.
- Navegador Chromium/Brave: oito rotas com idioma, título, navegação ativa e um `h1`/`main` por página.
- Filtros: projetos 4/2/1/1 por contexto; textos 6 no total e 2/3/3 por assunto, incluindo múltiplas categorias.
- Abas de experiência: clique e navegação por teclado com ArrowRight/Home.
- Tema e paleta: sincronização entre cabeçalho/rodapé, persistência após navegação e funcionamento com gravação de storage bloqueada.
- Troca de idioma: caminho preservado. Ela carrega um novo documento para inicializar o root layout no idioma escolhido.
- Responsividade: quatro páginas sem overflow horizontal em 320px, 390px, 768px e 1024px; oito rotas também verificadas em 1440px.
- Movimento reduzido: animações/transições desativadas e rolagem suave removida.
- Nenhum erro de console ou exceção de hidratação na rodada final do navegador.
- Navegação interna com `next/link`: sem recarregar o documento e sem erros de console. Raiz com redirecionamento 307 para `/pt`; rota inexistente e idioma inválido com 404.
- `git diff --check`: aprovado.

A validação no navegador usou scripts temporários via Chrome DevTools Protocol, sem adicionar dependências ou infraestrutura de testes ao projeto. Leitor de tela, auditoria de contraste e Lighthouse ainda não foram executados. As imagens e o conteúdo definitivo continuam pendentes.

O Next.js emitiu um alerta de segurança para a versão 16.4.2 já instalada na base. A atualização do framework está registrada no roadmap; não foi incluída nesta transposição.

## Como registrar a próxima entrega

Adicione uma entrada no topo com data, problema/resultado, mudanças relevantes e verificações executadas. Diferencie o que foi implementado do que ainda é uma proposta. Registre decisões duradouras no Decision Log e mantenha o roadmap coerente.
