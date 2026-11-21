# Conteúdo de textos

`index.ts` contém pautas de prévia, não artigos publicados. Os textos ficam separados dos IDs e categorias. A mesma entrada pode participar de mais de um filtro.

O contrato em `src/features/writing/types.ts` distingue rascunhos de publicações. Artigos publicados exigem `href`, `publishedAt` em ISO e `readingMinutes`; rascunhos não aceitam esses campos. A interface agrupa publicações por ano e rascunhos em “Em preparação”.

Após escolher o processador de MDX, adicione os textos completos por idioma e implemente as páginas de detalhe. Só então publique conteúdo revisado e calcule o tempo de leitura. Consulte `docs/ARCHITECTURE.md` e `docs/ROADMAP.md`.
