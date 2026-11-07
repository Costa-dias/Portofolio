export const PROJECT_PRESENTATION: Record<string, { problem: string; participation: string; decision: string; evidence: string }> = {
  'Assistente de TI': {
    problem: 'Reunir registros de atendimento, pendências e conhecimento técnico para apoiar a rotina de suporte.',
    participation: 'Parti das necessidades da minha rotina, defini campos e fluxos e validei o uso. O desenvolvimento utiliza apoio de IA, com revisão e ajustes a partir dos testes.',
    decision: 'Manter o acesso privado e reunir OS, indicadores, pendências, casos atípicos e comandos na base de conhecimento. A consulta ao Gemini é opcional.',
    evidence: 'Captura real sem dados pessoais, apresentação pública e demonstração com dados fictícios. Os registros de trabalho permanecem privados.',
  },
  'FraudLens': {
    problem: 'Ajudar uma pessoa a compreender os sinais de risco de um link antes de decidir abri-lo.',
    participation: 'Defini a experiência de consulta e a apresentação dos sinais e limitações, com desenvolvimento apoiado por IA e validação dos fluxos.',
    decision: 'Separar risco e cobertura das fontes; apresentar resultado inconclusivo quando faltam informações. Extrair QR Codes de imagens e vídeos no aparelho.',
    evidence: 'Aplicação pública, captura atual e testes da API disponíveis no repositório. Uma análise sem detecções não garante segurança.',
  },
  'TurnoExtra': {
    problem: 'Organizar serviços e acompanhar valores combinados, recebimentos parciais e saldos pendentes.',
    participation: 'Defini as necessidades da agenda e do controle de recebimentos, testei os fluxos e solicitei ajustes durante o desenvolvimento com apoio de IA.',
    decision: 'Armazenar dados criptografados no navegador e permitir backup protegido; conferir conflitos de horário, inclusive na virada do dia.',
    evidence: 'Aplicação pública, exemplo interativo com valores fictícios e testes das regras de recebimento, conflitos e backup no repositório.',
  },
  'Dashboard Finanças': {
    problem: 'Distinguir movimentações realizadas de compromissos previstos no controle financeiro pessoal.',
    participation: 'Organizei os requisitos de lançamentos, contas e projeções e validei os resultados e a importação do TurnoExtra, com desenvolvimento apoiado por IA.',
    decision: 'Manter controle manual e dados locais; revisar importações e tratar transferências sem registrá-las como receita ou despesa.',
    evidence: 'Aplicação pública, demonstração fictícia e testes de projeções, contas, transferências e backup documentados no repositório.',
  },
  'HUB — Radar de Golpes': {
    problem: 'Explicar modalidades de golpes e ajudar a reconhecer sinais de alerta e formas de agir.',
    participation: 'Defini a proposta educativa complementar ao FraudLens e a organização da experiência, com apoio de IA na implementação e revisão do conteúdo.',
    decision: 'Organizar conteúdo por categoria, com fontes e quizzes. O conteúdo é revisado manualmente; não é um ranking automático de golpes em tempo real.',
    evidence: 'Site público com orientações, fontes de consulta e quizzes explicados. Complementa a análise de links do FraudLens.',
  },
};
