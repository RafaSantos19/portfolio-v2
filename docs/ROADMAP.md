# Roadmap

Atualizado em **2026-11-21**. A migração estrutural das quatro páginas está implementada. A publicação e o conteúdo editorial ainda dependem das etapas abaixo.

## Entregue nesta etapa

- [x] Home, Projetos, Sobre e Textos em Next.js, nos dois idiomas.
- [x] Layout, CTA, apresentações de projetos/textos e experiência reutilizáveis.
- [x] Conteúdo tipado separado da interface.
- [x] Filtros funcionais e abas acessíveis por teclado.
- [x] Tema claro/escuro e três paletas com persistência.
- [x] Fontes do wireframe hospedadas junto à aplicação.
- [x] Adaptações para mobile e preferência por movimento reduzido.
- [x] Documentação de arquitetura, design e evolução.

## Antes de publicar

- [ ] Revisar o alerta de segurança emitido pelo Next.js 16.4.2 e atualizar a base para uma versão corrigida.
- [ ] Fornecer email, GitHub e LinkedIn em `src/config/site.ts`.
- [ ] Adicionar retrato com direitos de uso e currículo atualizado.
- [ ] Confirmar empresas, cargos, períodos, descrições e formação.
- [ ] Substituir prévias de projetos por cases verificados com mídia, contexto e resultados.
- [ ] Revisar a biografia, a disponibilidade e a stack profissional.
- [ ] Revisar textos em português e inglês.
- [ ] Revisar contraste em todas as combinações de paleta/tema.
- [ ] Testar com leitor de tela e dispositivos móveis reais.
- [ ] Definir domínio e ambiente de deploy. A preferência documentada continua sendo Vercel.

## Conteúdo longo

- [ ] Escolher processador de MDX com critérios de manutenção, segurança e compatibilidade com a versão instalada.
- [ ] Implementar `/[locale]/work/[slug]` e `/[locale]/writing/[slug]`.
- [ ] Definir esquema de metadados e validar slugs, datas e traduções.
- [ ] Implementar o layout de case: contexto → problema → decisões → implementação → resultado → aprendizado.
- [ ] Publicar artigos revisados e calcular tempo de leitura a partir do texto final.
- [x] Estrutura de ordenação por data e agrupamento por ano para artigos publicados (sem artigos publicados nesta etapa).
- [ ] Adicionar estados de conteúdo vazio e detalhe não encontrado conforme a publicação evoluir.

## Evolução visual

- [ ] Revisar proporções, densidade, hierarquia e recortes com as imagens reais.
- [ ] Decidir se as três paletas continuam disponíveis na versão pública.
- [ ] Confirmar a tipografia final e a escolha do tema inicial.
- [ ] Avaliar se capacidades e princípios precisam de destinos próprios.
- [ ] Adicionar animações somente quando ajudarem a explicar, orientar ou dar feedback.
- [ ] Avaliar shadcn/ui apenas se novos padrões de interação justificarem uma biblioteca.

## SEO e observabilidade

- [ ] Configurar URL canônica e `hreflang` após definir o domínio.
- [ ] Adicionar sitemap, robots e OpenGraph com URLs reais.
- [ ] Fazer auditoria de desempenho/Lighthouse com conteúdo final.
- [ ] Definir se analytics é necessário e qual política de privacidade se aplica.

## Critério para considerar uma entrega pronta

Conteúdo revisado, links com destino real, tipagem e build sem erros, navegação entre as oito rotas, filtros/abas funcionando, preferências persistentes, ausência de erros de hidratação e revisão nas larguras principais. Atualize `CHANGELOG.md` com as verificações efetivamente realizadas e suas limitações.
