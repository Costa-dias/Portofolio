from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT

ROOT = Path(__file__).resolve().parents[1]
pdfmetrics.registerFont(TTFont('DV', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DV-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFontFamily('DV', normal='DV', bold='DV-Bold', italic='DV', boldItalic='DV-Bold')
body = ParagraphStyle('body', fontName='DV', fontSize=9, leading=13, textColor=colors.HexColor('#242735'), spaceAfter=6)
title = ParagraphStyle('title', parent=body, fontName='DV-Bold', fontSize=20, leading=25, spaceAfter=7)
section = ParagraphStyle('section', parent=body, fontName='DV-Bold', fontSize=10, leading=14, spaceBefore=12, spaceAfter=7, textColor=colors.HexColor('#58345f'))
job = ParagraphStyle('job', parent=body, fontName='DV-Bold', fontSize=9.5, leading=14, spaceBefore=7, spaceAfter=3)
story=[]
def p(text, style=body): story.append(Paragraph(text, style))
def h(text): p(text, section)
def role(name, org, dates, details):
    p(name, job); p(f'{org} | {dates}')
    for detail in details: p('• '+detail)

p('JOÃO VITOR DA COSTA DIAS', title)
p('<b>Suporte de TI N1/N2 | Sistemas Hospitalares | MV SOUL</b>')
p('Praia Grande/SP · <a href="mailto:costa.diass@outlook.com" color="#58345f">costa.diass@outlook.com</a>')
h('RESUMO PROFISSIONAL')
p('Profissional de TI com atuação em suporte N1/N2 presencial e remoto no ambiente hospitalar. Experiência em diagnóstico de incidentes, manutenção de computadores e impressoras, conectividade e atendimento aos setores assistenciais e administrativos.')
p('Atuação no MV SOUL com administração operacional de usuários, perfis, permissões e vínculos de prestadores, além de apoio em ajustes e validações de convênios, planos e guias TISS. Vivência anterior no atendimento hospitalar, contribuindo para compreender as necessidades dos usuários e os impactos dos sistemas na rotina dos setores.')
p('Cursando Análise e Desenvolvimento de Sistemas. Desenvolve projetos web com apoio de inteligência artificial, participando da definição de requisitos, organização dos fluxos, testes e melhorias. Busca evolução para a área de análise de suporte e sistemas, com interesse em ERP e sistemas hospitalares.')
h('COMPETÊNCIAS')
p('<b>Suporte:</b> atendimento presencial e remoto, Windows, hardware, software, impressoras e acompanhamento de chamados.')
p('<b>Sistemas hospitalares:</b> MV SOUL, usuários, perfis de acesso, permissões, prestadores e apoio a processos de convênios e TISS.')
p('<b>Redes e organização:</b> diagnóstico de conectividade, IP, DNS, gateway, rede local, documentação de procedimentos e análise de incidentes recorrentes.')
p('<b>Desenvolvimento:</b> conhecimentos em HTML, CSS, JavaScript, TypeScript, React, Git/GitHub e Python básico.')
h('EXPERIÊNCIA PROFISSIONAL')
role('Auxiliar Técnico de Informática', 'Associação Santa Saúde - Hospital Infantil Gonzaga, Santos/SP', 'nov/2025 - atualmente', [
'Suporte N1/N2 aos setores hospitalares, presencialmente e por acesso remoto; diagnóstico de incidentes em computadores, impressoras, aplicativos e conectividade.',
'Administração operacional de usuários, perfis, permissões e vínculos de prestadores no MV SOUL.',
'Apoio em ajustes e testes de convênios, planos e guias TISS, com validação pelas áreas responsáveis.',
'Investigação de problemas de acesso e rede; registro e acompanhamento de OS, documentação de soluções e identificação de recorrências. Apoio técnico a outras unidades conforme a necessidade operacional.'
])
role('Prestador de Serviços de TI - Autônomo', 'Biomega, Santos/SP', 'set/2026 - atualmente', [
'Suporte a impressoras, estações de trabalho e sistemas em ambiente de saúde. Apoio à infraestrutura de rede, incluindo cabeamento, pontos, switches e conectividade.'
])
story.append(PageBreak())
p('JOÃO VITOR DA COSTA DIAS', job)
p('Experiência complementar, projetos e formação')
role('Auxiliar de Atendimento Pleno', 'Associação Santa Saúde, Santos/SP', 'mai/2022 - nov/2025', ['Atendimento e atividades administrativas no ambiente hospitalar, utilização de sistemas e comunicação com setores assistenciais e administrativos.'])
role('Assistente de Suporte de TI - Autônomo', 'BenTech, Praia Grande/SP', 'jan/2024 - fev/2024', ['Suporte técnico, manutenção preventiva e corretiva de computadores e configuração de software.'])
role('Recepcionista', 'Santa Casa de Misericórdia de Santos, Santos/SP', 'fev/2021 - mai/2022', ['Atendimento no pronto-socorro e laboratório, com utilização de sistemas e execução de rotinas administrativas.'])
role('Auxiliar de Atendimento Interno e Externo', 'Exército Brasileiro - FUSEX', 'jan/2017 - mar/2018', ['Atendimento, agendamentos e organização de informações e rotinas administrativas.'])
h('PROJETOS EM DESTAQUE')
p('Projetos autorais desenvolvidos com apoio de inteligência artificial, com participação na definição das necessidades, testes e evolução das funcionalidades.')
p('<b>Assistente de TI:</b> organização de ordens de serviço, consulta ao histórico e registro de soluções em uma base de conhecimento, inspirado nas necessidades da rotina de suporte.')
p('<b>FraudLens:</b> ferramenta para consulta de sinais de risco em links e extração local de QR Codes de imagens e vídeos.')
p('<b>TurnoExtra:</b> organização de serviços, valores recebidos, pagamentos parciais e saldos.')
h('FORMAÇÃO')
p('<b>Análise e Desenvolvimento de Sistemas - Tecnólogo</b><br/>Anhanguera Educacional | jan/2026 - jul/2028 (em andamento).')
p('<b>Manutenção de Computadores - Hardware e Software</b><br/>SENAI São Paulo | 2017-2018.')
h('CURSOS COMPLEMENTARES')
p('Administração de Banco de Dados - Fundação Bradesco, 2026.<br/>Cibersegurança - Hackers do Bem, 2024.<br/>Tecnologia da Informação e Comunicação - Fundação Bradesco, 2024.<br/>LGPD - Fundação Bradesco, 2023.')
def footer(canvas, doc):
    canvas.setStrokeColor(colors.HexColor('#ddd6e1'));canvas.line(42,37,553,37)
    canvas.setFont('DV',7);canvas.setFillColor(colors.HexColor('#66616c'))
    canvas.drawString(42,25,'Currículo profissional · atualizado em 07/11/2026')
    canvas.drawRightString(553,25,f'{doc.page} / 2')
out=ROOT/'public/curriculo/Joao-Vitor-Curriculo.pdf'
out.parent.mkdir(parents=True,exist_ok=True)
SimpleDocTemplate(str(out),pagesize=(595.28,841.89),rightMargin=42,leftMargin=42,topMargin=34,bottomMargin=48,title='Currículo - João Vitor da Costa Dias',author='João Vitor da Costa Dias').build(story,onFirstPage=footer,onLaterPages=footer)
print(out)
