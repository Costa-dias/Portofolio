# Portfólio — João Vitor

Site pessoal em React/TypeScript, Vite e Tailwind CSS para apresentar trajetória em TI e projetos de desenvolvimento com IA aplicada.

- [Portfólio](https://portfolio-qrb3.onrender.com/)
- [LinkedIn](https://www.linkedin.com/in/joao-vitor-tec/)
- [GitHub](https://github.com/Costa-dias)

## Projetos e estudos de caso

Todos os projetos apresentados possuem demonstrações interativas com dados fictícios. O Assistente de TI aponta para sua apresentação pública, enquanto sua aplicação e código principal permanecem privados. Todos os projetos também incluem estudos de caso com problema, decisões técnicas, validação e limitações. Os cenários de demonstração são ilustrativos; não representam métricas de clientes ou de uso em produção. Capturas identificadas como demonstração usam dados fictícios.

O TurnoExtra usa IndexedDB/Web Crypto localmente; não depende de Supabase. O Honey Bee usa Supabase para catálogo e administração. Conteúdo técnico dos estudos está em `src/caseStudies.ts`.

## Executar

Requer Node.js 24.

```bash
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
```

O deploy estático gera `dist/`. Configuração dos headers de produção está em `render.yaml`; a existência dessa configuração não comprova os headers da versão atualmente publicada.
