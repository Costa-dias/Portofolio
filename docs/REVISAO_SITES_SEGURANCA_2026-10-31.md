# Revisão dos sites — 31/10/2026

Foram examinados dez repositórios relacionados a sites, incluindo os privados. Oito receberam manutenção; Corretor-de-imoveis-vitrine e projeto-web-ti-apresentacao contêm somente documentação. ULTRON não foi incluído.

## Versões salvas no GitHub

| Projeto | Versão | Commit |
| --- | --- | --- |
| Portofolio | 2.0.2 | [2e70e84](https://github.com/Costa-dias/Portofolio/commit/2e70e84b13faaf7ff3a193983284a9c369022c68) |
| honey-bee-catalogo | 2.0.2 | [201519e](https://github.com/Costa-dias/honey-bee-catalogo/commit/201519e70290ddab208966a6ed098b01e2d8b1d8) |
| FraudLens | 1.3.2 | [62b9d8d](https://github.com/Costa-dias/FraudLens/commit/62b9d8d89b202c3bcdefda89756afc602526f6ea) |
| Dashboard-Financas | 2.0.2 | [5a61ef2](https://github.com/Costa-dias/Dashboard-Financas/commit/5a61ef2c0b6fd98960e3a86afd8cdadf9facd7b3) |
| TurnoExtra | 2.0.2 | [158cbf5](https://github.com/Costa-dias/TurnoExtra/commit/158cbf5fd60e3b2296ea5fbdeae7d90c3e3f6bc8) |
| Assistente-de-TI | 2.0.3 | [4480f4f](https://github.com/Costa-dias/Assistente-de-TI/commit/4480f4fe6aa5083fcc169d4c17f75f39e1fa4b55) |
| radar-de-golpes-hub | 1.1.3 | [0df4228](https://github.com/Costa-dias/radar-de-golpes-hub/commit/0df4228b7f26e77b9dacb6ab265ae9fb0e0dc805) |
| corretor-imoveis | 1.1.2 | [fdbd899](https://github.com/Costa-dias/corretor-imoveis/commit/fdbd89918593632856d3412150dccaa58260fc74) |

## Correções

1. Corretor de Imóveis: follow-redirects 1.16.1 → 1.16.2, via resolution e yarn.lock regenerado. A versão afetada foi confirmada no lockfile. A exploração no aplicativo não foi demonstrada. Fonte: https://github.com/advisories/GHSA-mrwp-f3q8-3g9p
2. Honey Bee, FraudLens, Portfólio, Dashboard, TurnoExtra, Assistente de TI e Radar: minimatch 10.2.6 → 11.0.1 na cadeia de @typescript-eslint/typescript-estree, com override restrito ao consumidor. Fonte: https://github.com/advisories/GHSA-g3hv-75wg-m249
3. Versão, data e notas de manutenção atualizadas em cada projeto.

## Validação realizada

- Seis projetos npm: instalação pelo lockfile, testes existentes, typecheck, lint e build aprovados. Build repetido após atualizar metadados de versão.
- Radar: instalação Bun com lockfile congelado, teste editorial, lint e build aprovados. Não foi repetido o teste de execução do Worker.
- Corretor: instalação Yarn; oito testes de configuração e build aprovados. Os quatro testes Playwright ficaram bloqueados por falta do Chromium. O download oficial retornou arquivo inválido; não se declara aprovação desses quatro testes.
- npm audit --omit=dev: zero avisos em todos os seis projetos npm.
- yarn audit no Corretor após a correção: zero avisos.
- pip-audit sobre os requirements completos e fixados: FraudLens (23 pins) e Corretor (45 pins), sem vulnerabilidades conhecidas. Não foi consultado o ambiente Python instalado em produção.
- Ausência das dependências pypdf, pyasn1, node-forge e @sigstore/oci, e da action pypa/gh-action-pypi-publish nos arquivos examinados.
- As sete páginas públicas consultadas responderam HTTP 200. A raiz da API FraudLens retornou status ok. A rota /health não existe nesse backend.
- As versões package.json dos oito projetos foram relidas do GitHub após os commits e conferidas.

## Pendências e limites

Minimatch 3.1.5 permanece nas ferramentas ESLint, por incompatibilidade de API com a série 11. A série 11 remove makeRe e muda o formato dos resultados. O aviso descreve padrões controlados por terceiros e optimizationLevel >= 2; não foi encontrado esse uso no aplicativo, e essa opção foi introduzida na série 7. O alerta continua contabilizado pelo auditor; não foi suprimido.

Auditoria npm completa: 11 avisos moderados por projeto (10 no Assistente), contando consumidores transitivos do mesmo aviso. Auditoria Bun: um aviso moderado remanescente. Zero altas ou críticas nessas auditorias após a manutenção. Workflows que exigem zero avisos podem continuar falhando por essa pendência. Não foi feita migração ampla do ESLint para alterar essa cadeia.

GitHub não retornou workflow runs associados aos commits na consulta desta execução. Não se declara sucesso dos checks remotos.

A atualização no GitHub foi concluída. Deploy é uma etapa separada: a comparação inicial dos assets públicos coincidiu com o build novo em FraudLens, Portfólio, Dashboard e TurnoExtra. Honey Bee também foi confirmado pela versão 2.0.2 e data 31/10/2026 no bundle público (o hash difere por configuração de build). Corretor, Radar e Assistente exigem conferência adicional para confirmar publicação. O Render não possui workspace selecionado na conexão; nenhuma configuração de workspace foi modificada. HTTP 200 isolado não confirma uma versão.

Os relatórios específicos estão em docs/SECURITY_REVIEW_2026-10-31.md de cada repositório.
