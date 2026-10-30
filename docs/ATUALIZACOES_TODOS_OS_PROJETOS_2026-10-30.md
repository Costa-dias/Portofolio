# Atualizações dos projetos — 30/10/2026

Esta rodada reúne correções de segurança e atualizações compatíveis, com versões do produto e data alinhadas no código e no README. ULTRON ficou fora do escopo.

## Como ler as mudanças

- A coluna “Para que serve” explica a responsabilidade da biblioteca. A atualização da biblioteca não significa, por si só, que o site ganhou uma função nova.
- Foram preservadas as linhas principais das aplicações: React 18 nos projetos que já o utilizavam, React 19 onde já existia, TypeScript 5 e as linhas compatíveis de Vite. Migrações gerais para React 19/TypeScript 7/ESLint 10 não foram forçadas nesta manutenção.
- Foram mantidas as políticas de acesso, a criptografia e os formatos dos dados. Testes utilizam exemplos fictícios; nenhuma OS, transação, produto ou imóvel real foi criado, editado ou apagado.

## Portfólio — 2.0.0 → 2.0.1

Atualização das ferramentas de CSS e análise estática. O conteúdo, os estudos de caso e a navegação continuam com o mesmo escopo. O rodapé identifica a revisão de manutenção.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `autoprefixer` | 10.6.1 | 10.6.2 | Ajusta CSS para compatibilidade entre navegadores. |
| `postcss` | 8.5.31 | 8.5.32 | Processamento do CSS no build. |
| `typescript-eslint` | 8.72.0 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

### Verificações

TypeScript, lint e build.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## TurnoExtra — 2.0.0 → 2.0.1

O plugin de geração de PWA dependia de Workbox → plugin-node-resolve → deepmerge, sem correção publicada para o advisory. Essa cadeia foi removida, sem usar downgrade automático nem ocultar o alerta. O build agora gera `sw.js` com a lista dos próprios arquivos estáticos e um identificador derivado do conteúdo. O manifesto mantém nome, ícones e escopo. Navegações tentam a rede e usam a página armazenada quando a rede falha; recursos estáticos utilizam o cache. Somente caches estáticos próprios e o cache legado do mesmo escopo são limpos. O mecanismo não acessa IndexedDB, PIN, backups, recebimentos ou dados de serviços. Uma instalação incompleta não substitui o worker anterior. Foram adicionados quatro testes para esse comportamento.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `@types/node` | não incluído | 24.19.2 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `@types/react` | 18.3.11 | 18.3.31 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `@types/react-dom` | 18.3.0 | 18.3.7 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `typescript-eslint` | 8.72.0 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

Dependências diretas removidas: `vite-plugin-pwa`.

### Verificações

Testes de domínio, quatro testes do PWA, TypeScript da aplicação e do build, lint e build.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## Dashboard Finanças — 2.0.0 → 2.0.1

Atualização das ferramentas e tipagens dentro das linhas compatíveis. Os testes continuam cobrindo saldo realizado/projetado, contas, transferências, parcelas, exportação XLSX, backup criptografado e troca atômica de PIN. Não foi alterado o formato do cofre nem feita migração de dados nesta publicação.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `@types/react` | 18.3.11 | 18.3.31 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `@types/react-dom` | 18.3.0 | 18.3.7 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `typescript-eslint` | 8.72.0 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

### Verificações

Testes financeiros e do armazenamento, TypeScript, lint e build.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## Honey Bee — 2.0.0 → 2.0.1

Manutenção das bibliotecas de build e tipagens. O teste de orçamento deixou de iniciar uma varredura de dependências que poderia continuar após o fechamento do servidor de teste. A solicitação pelo WhatsApp continua exigindo revisão do cliente; não passou a reservar estoque, confirmar encomenda ou realizar pagamento. O SDK Supabase JavaScript já estava atualizado e foi preservado.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `typescript-eslint` | 8.72.0 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

### Verificações

Teste de orçamento, TypeScript, lint e build.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## Assistente de TI — 2.0.1 → 2.0.2

Google Sheets e autenticação Google receberam revisões de manutenção. Também foi ajustada uma declaração de variáveis no parser de datas para atender ao lint, sem mudar a regra de interpretação das datas. Os 57 testes protegem consultas, sete campos da OS, datas antigas, concorrência, repetição de requisições, edição, exclusão e aprovação do diagnóstico. Nenhuma planilha foi escrita nesta rodada.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `@googleapis/sheets` | 18.1.1 | 18.1.2 | Cliente oficial da API Google Sheets. |
| `google-auth-library` | 11.3.1 | 11.3.2 | Autenticação e troca/verificação de credenciais Google no servidor. |
| `autoprefixer` | 10.6.1 | 10.6.2 | Ajusta CSS para compatibilidade entre navegadores. |
| `postcss` | 8.5.30 | 8.5.32 | Processamento do CSS no build. |
| `typescript-eslint` | 8.71.2 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

### Verificações

Lint, 57 testes, TypeScript e build.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## Vitrine Imobiliária — 1.1.0 → 1.1.1

Componentes da interface, bibliotecas de datas/rede/formulários e a linha React 19 foram atualizados. Como o bundle único cresceu após a atualização, login e administração passaram a ser carregados apenas quando suas rotas são abertas. A vitrine pública mantém o layout original, as fotografias e os exemplos fictícios. O build da vitrine caiu de aproximadamente 541 kB para 471 kB após a separação das rotas; login e admin ficam em arquivos próprios. O backend mantém os mesmos endpoints e autorização. Nenhum cadastro ou arquivo de usuário foi alterado.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `@hookform/resolvers` | 5.5.7 | 5.9.2 | Conecta validadores aos formulários. |
| `@radix-ui/react-accordion` | 1.2.8 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-alert-dialog` | 1.1.11 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-aspect-ratio` | 1.1.4 | 1.2.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-avatar` | 1.1.7 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-checkbox` | 1.2.3 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-collapsible` | 1.1.8 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-context-menu` | 2.2.12 | 2.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-dialog` | 1.1.11 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-dropdown-menu` | 2.1.12 | 2.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-hover-card` | 1.1.11 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-label` | 2.1.4 | 2.1.17 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-menubar` | 1.1.12 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-navigation-menu` | 1.2.10 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-popover` | 1.1.11 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-progress` | 1.1.4 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-radio-group` | 1.3.4 | 1.5.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-scroll-area` | 1.2.6 | 1.4.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-select` | 2.2.2 | 2.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-separator` | 1.1.4 | 1.2.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-slider` | 1.3.2 | 1.6.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-slot` | 1.2.0 | 1.5.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-switch` | 1.2.2 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-tabs` | 1.1.9 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-toast` | 1.2.11 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-toggle` | 1.1.6 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-toggle-group` | 1.1.7 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-tooltip` | 1.2.4 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@tanstack/react-query` | 5.56.2 | 5.105.0 | Estado e cache de consultas no navegador. |
| `axios` | 1.20.0 | 1.21.0 | Cliente HTTP: envia e recebe requisições das APIs. |
| `date-fns` | 4.1.0 | 4.4.0 | Formatação e operações com datas. |
| `dayjs` | 1.11.13 | 1.11.23 | Manipulação de datas. |
| `framer-motion` | 11.18.0 | 11.18.2 | Animações e transições. |
| `input-otp` | 1.4.2 | 1.5.0 | Componente de entrada de códigos. |
| `react` | 19.0.0 | 19.3.1 | Renderização, componentes e estado da interface. |
| `react-dom` | 19.0.0 | 19.3.1 | Conecta o React ao DOM do navegador. |
| `react-hook-form` | 7.83.0 | 7.91.0 | Estado e validação de formulários. |
| `react-resizable-panels` | 3.0.1 | 3.0.6 | Painéis redimensionáveis. |
| `react-router-dom` | 7.18.2 | 7.18.5 | Navegação entre vitrine, login e administração. |
| `recharts` | 3.6.0 | 3.10.1 | Renderização de gráficos. |
| `sonner` | 2.0.3 | 2.0.8 | Notificações da interface. |
| `swr` | 2.3.8 | 2.5.1 | Consultas e revalidação de dados. |
| `tailwind-merge` | 3.2.0 | 3.7.0 | Combina classes Tailwind sem duplicidades conflitantes. |
| `autoprefixer` | 10.4.20 | 10.6.2 | Ajusta CSS para compatibilidade entre navegadores. |
| `postcss` | 8.5.31 | 8.5.32 | Processamento do CSS no build. |

### Backend Python

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `fastapi` | >=0.141.0 | 0.162.0 | Define endpoints, validação e documentação da API. |
| `starlette` | >=1.0.1 | 1.10.0 | Camada HTTP/ASGI sobre a qual o FastAPI funciona. |
| `uvicorn[standard]` | 0.34.0 | 0.54.0 | Servidor que executa a API no Render. |
| `python-dotenv` | 1.2.2 | 1.2.4 | Carrega configurações do ambiente no desenvolvimento. |
| `pydantic[email]` | 2.10.5 | 2.14.2 | Validação e serialização dos modelos de dados. |
| `supabase` | 2.11.0 | 2.33.0 | Cliente Python de autenticação, consultas e armazenamento. |
| `python-multipart` | >=0.0.27 | 0.0.32 | Leitura de formulários e arquivos enviados. |
| `certifi` | dependência transitiva | 2026.10.23 | Certificados públicos para validação TLS. |

`requirements.in` registra as bibliotecas diretas; `requirements.txt` passa a fixar também as dependências transitivas. O Render continua instalando `requirements.txt`. Isso torna builds futuros mais reproduzíveis. A auditoria Python não apontou vulnerabilidades conhecidas na resolução fixada. Os metadados dos pacotes aceitam Python 3.11.18.

### Verificações

Oito testes da base de URLs, build do frontend e cinco testes novos do backend com dados fictícios e cliente externo simulado.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## FraudLens — 1.3.0 → 1.3.1

Axios e ferramentas de CSS/TypeScript receberam manutenção. O backend foi atualizado dentro das APIs testadas. As respostas de risco, cobertura e estado inconclusivo continuam com o mesmo contrato; a numeração do produto não é a versão do contrato FastAPI. A extração de QR Codes continua local e os testes não enviam links reais às bases externas.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `axios` | 1.20.0 | 1.21.0 | Cliente HTTP: envia e recebe requisições das APIs. |
| `autoprefixer` | 10.6.1 | 10.6.2 | Ajusta CSS para compatibilidade entre navegadores. |
| `postcss` | 8.5.31 | 8.5.32 | Processamento do CSS no build. |
| `typescript-eslint` | 8.72.0 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

### Backend Python

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `fastapi` | 0.161.1 | 0.162.0 | Define endpoints, validação e documentação da API. |
| `starlette` | 1.9.0 | 1.10.0 | Camada HTTP/ASGI sobre a qual o FastAPI funciona. |
| `uvicorn[standard]` | 0.54.0 | 0.54.0 | Servidor que executa a API no Render. |
| `httpx` | 0.28.1 | 0.28.1 | Cliente HTTP usado pelas integrações e testes. |
| `pydantic` | 2.14.1 | 2.14.2 | Validação e serialização dos modelos de dados. |
| `certifi` | 2026.10.23 | 2026.10.23 | Certificados públicos para validação TLS. |

`requirements.in` registra as bibliotecas diretas; `requirements.txt` passa a fixar também as dependências transitivas. O Render continua instalando `requirements.txt`. Isso torna builds futuros mais reproduzíveis. A auditoria Python não apontou vulnerabilidades conhecidas na resolução fixada. Os metadados dos pacotes aceitam Python 3.11.18.

### Verificações

Teste de prontidão/cancelamento da API, TypeScript, lint, build e 37 testes Python.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## Radar de Golpes — 1.1.1 → 1.1.2

Atualização compatível de React 19, Radix, formulários, animações, cache de consultas e da integração de build TanStack/Nitro. A formatação dos arquivos de versão foi alinhada ao lint. O build cliente/SSR/prerender e o Worker foram testados; conteúdo editorial, fontes e quizzes mantêm o propósito educativo e a curadoria manual.

### Bibliotecas diretas alteradas

| Biblioteca | Antes | Depois | Para que serve |
|---|---|---|---|
| `@hookform/resolvers` | 5.5.7 | 5.9.2 | Conecta validadores aos formulários. |
| `@radix-ui/react-accordion` | 1.2.20 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-alert-dialog` | 1.1.23 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-aspect-ratio` | 1.1.15 | 1.2.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-avatar` | 1.2.6 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-checkbox` | 1.3.11 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-collapsible` | 1.1.20 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-context-menu` | 2.3.7 | 2.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-dialog` | 1.1.23 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-dropdown-menu` | 2.1.24 | 2.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-hover-card` | 1.1.23 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-label` | 2.1.15 | 2.1.17 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-menubar` | 1.1.24 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-navigation-menu` | 1.2.22 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-popover` | 1.1.23 | 1.3.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-progress` | 1.1.16 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-radio-group` | 1.4.7 | 1.5.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-scroll-area` | 1.2.18 | 1.4.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-select` | 2.3.7 | 2.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-separator` | 1.1.15 | 1.2.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-slider` | 1.4.7 | 1.6.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-slot` | 1.3.3 | 1.5.0 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-switch` | 1.3.7 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-tabs` | 1.1.21 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-toggle` | 1.1.18 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-toggle-group` | 1.1.19 | 1.2.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@radix-ui/react-tooltip` | 1.2.16 | 1.4.1 | Primitiva de interface e acessibilidade (diálogos, menus, seletores ou componentes relacionados). |
| `@tanstack/react-query` | 5.101.4 | 5.105.0 | Estado e cache de consultas no navegador. |
| `framer-motion` | 13.2.0 | 13.5.1 | Animações e transições. |
| `input-otp` | 1.4.2 | 1.5.0 | Componente de entrada de códigos. |
| `react` | 19.2.8 | 19.3.1 | Renderização, componentes e estado da interface. |
| `react-dom` | 19.2.8 | 19.3.1 | Conecta o React ao DOM do navegador. |
| `react-hook-form` | 7.83.0 | 7.91.0 | Estado e validação de formulários. |
| `react-resizable-panels` | 4.12.2 | 4.15.0 | Painéis redimensionáveis. |
| `sonner` | 2.0.7 | 2.0.8 | Notificações da interface. |
| `tailwind-merge` | 3.6.0 | 3.7.0 | Combina classes Tailwind sem duplicidades conflitantes. |
| `@lovable.dev/vite-tanstack-config` | 2.20.0 | 2.27.0 | Integra o build Vite/TanStack/Nitro e o destino Cloudflare. |
| `@types/node` | 22.20.1 | 22.20.5 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `@types/react` | 19.2.17 | 19.3.0 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `@types/react-dom` | 19.2.3 | 19.3.0 | Tipagem para desenvolvimento; não acrescenta recurso ao site. |
| `eslint-plugin-prettier` | 5.5.6 | 5.5.7 | Integra a formatação ao lint. |
| `prettier` | 3.9.6 | 3.9.10 | Formatação automática do código. |
| `typescript-eslint` | 8.65.0 | 8.72.1 | Verifica código TypeScript e regras de qualidade. |

### Verificações

Lint, build cliente/SSR/prerender, validação editorial e teste do Worker: página 200, rota ausente 404, CSP e recursos estáticos.

Auditoria das dependências JavaScript: nenhuma vulnerabilidade conhecida reportada após as mudanças. Isso não substitui revisão de código nem significa risco zero.

## Segurança e limites

- A cadeia vulnerável do PWA do TurnoExtra foi removida, em vez de ocultar o advisory ou aplicar um downgrade sugerido automaticamente.
- Foram mantidas dependências principais que exigiriam uma migração arquitetural distinta. Atualização compatível não é sinônimo de instalar todas as versões principais mais novas.
- Os avisos de Fast Refresh em alguns arquivos são avisos de desenvolvimento; os checks não tiveram erros de lint. APIs de teste Python emitiram avisos de depreciação de httpx, sem falha dos testes.
- A validação online confirma a publicação e os fluxos públicos; autenticação e escritas com dados reais não são exercitadas automaticamente.

## Fontes técnicas

- [Advisory deepmerge GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4).
- Metadados oficiais do npm, PyPI e changelog do Supabase, consultados em 30/10/2026.
