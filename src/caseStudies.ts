export const CASE_STUDIES: Record<string, { repo: string; problem: string; decisions: string; example: string; validation: string; limits: string }> = {
  'TurnoExtra': {
    repo: 'TurnoExtra',
    problem: 'Organizar serviços em vários locais e acompanhar quanto foi recebido e quanto ainda falta cobrar.',
    decisions: 'React e TypeScript na interface, IndexedDB e Web Crypto no armazenamento. Recebimentos têm data e valor; conflitos consideram a virada do dia. Backup é criptografado e a restauração exige revisão.',
    example: 'Exemplo fictício: um serviço de R$ 600 com recebimento de R$ 200 mantém R$ 400 pendentes. Uma escala de 19h às 7h avisa sobre outro serviço iniciado às 6h do dia seguinte.',
    validation: 'Testes de domínio cobrem recebimentos antigos e parciais, conflitos, backup criptografado e exportação de calendário. O repositório explica como executá-los.',
    limits: 'Dados ficam neste navegador. Sem recuperação de PIN ou sincronização automática. Valores devem ser conferidos com os comprovantes.',
  },
  'Dashboard Finanças': {
    repo: 'Dashboard-Financas',
    problem: 'Distinguir dinheiro já movimentado dos compromissos futuros, sem conectar uma conta bancária.',
    decisions: 'Transações realizadas e previstas são separadas. Contas mantêm saldo inicial; transferências movimentam contas sem virar receita ou despesa. Exportação protegida usa senha independente do PIN.',
    example: 'Exemplo fictício: saldo inicial de R$ 500, receita realizada de R$ 100 e despesa prevista de R$ 30 produzem R$ 600 realizados e R$ 570 projetados.',
    validation: 'Testes cobrem projeções, contas, transferências, preservação de dados em Excel, mesclagem e senha incorreta em backup protegido.',
    limits: 'Controle manual, sem Open Finance. Projeção depende de lançamentos corretos. Excel e CSV são exportações sem criptografia.',
  },
  'FraudLens': {
    repo: 'FraudLens',
    problem: 'Explicar sinais de risco de uma URL antes que uma pessoa decida abrir o endereço.',
    decisions: 'Interface React, API FastAPI, análise estrutural e consultas a bases externas. Cobertura da consulta é separada do risco; resultado insuficiente aparece como inconclusivo.',
    example: 'Se uma base não responde ou a análise está antiga, a ferramenta informa a limitação. Prints e vídeos são usados para extrair QR Codes localmente, sem enviar arquivos ao servidor.',
    validation: 'Testes da API simulam bases externas e DNS, cobrem limites de uso, privacidade dos logs, indisponibilidade, análises antigas e termos legítimos como login e pix.',
    limits: 'Não garante que um site seja seguro, não faz análise completa de mensagens em imagens e não envia denúncias. A pontuação não é uma probabilidade estatística.',
  },
};
