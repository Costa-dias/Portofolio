import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CalendarDays, Check, ChevronRight, Code2, Database, Github, GraduationCap, Linkedin, LockKeyhole, MapPin, Menu, Network, ShieldCheck, Sparkles, X } from 'lucide-react';
import { ProjectBehindScenes } from './ProjectBehindScenes';
import { TurnoBehindScenes } from './TurnoBehindScenes';
import { CASE_STUDIES } from './caseStudies';

const GITHUB = 'https://github.com/Costa-dias';
const LINKEDIN = 'https://www.linkedin.com/in/joao-vitor-tec/';
const NAV = [{ label: 'Projetos', href: '#projetos' }, { label: 'Sobre', href: '#sobre' }, { label: 'Formação', href: '#formacao' }, { label: 'Trajetória', href: '#trajetoria' }, { label: 'Contato', href: '#contato' }];
type Project = { id: string; title: string; category: string; description: string; url: string; tags: string[]; icon: ReactNode; };
const featured: Project[] = [
  { id: 'assistente-ti', title: 'Assistente de TI', category: 'Da rotina de suporte para uma aplicação', description: 'Um ambiente privado para consultar e registrar atendimentos, encontrar ocorrências anteriores e apoiar o diagnóstico com IA opcional.', url: `${GITHUB}/projeto-web-ti-apresentacao`, tags: ['React', 'TypeScript', 'Node.js', 'Google Sheets', 'Gemini'], icon: <BriefcaseBusiness /> },
  { id: 'fraudlens', title: 'FraudLens', category: 'Segurança digital com sinais explicados', description: 'Verificação de URLs que apresenta os sinais encontrados e a cobertura das fontes, sem transformar falta de informação em garantia de segurança.', url: 'https://fraudlens-code.onrender.com/', tags: ['React', 'Python', 'FastAPI', 'APIs de segurança'], icon: <ShieldCheck /> },
  { id: 'turnoextra', title: 'TurnoExtra', category: 'Organização de serviços e recebimentos', description: 'Agenda para plantões e serviços, com controle de recebimentos parciais, conflitos de horário e acompanhamento de cobranças.', url: 'https://gestao-de-plantao.onrender.com/', tags: ['React', 'TypeScript', 'IndexedDB', 'Web Crypto'], icon: <CalendarDays /> },
];
const complementary: Project[] = [
  { id: 'dashboard-financas', title: 'Dashboard Finanças', category: 'Controle financeiro pessoal', description: 'Lançamentos realizados e previstos, contas, transferências e importação revisada dos recebimentos do TurnoExtra.', url: 'https://dashboard-financas-rfv6.onrender.com/', tags: ['React', 'TypeScript', 'Dados locais'], icon: <Database /> },
  { id: 'corretor-imoveis', title: 'Plataforma para Corretor de Imóveis', category: 'Catálogo e gestão de anúncios', description: 'Apresentação de imóveis, administração de cadastros e contato com o corretor. Código principal privado, com apresentação pública.', url: 'https://corretor-imoveis-frontend.onrender.com/', tags: ['React', 'Python', 'APIs'], icon: <BriefcaseBusiness /> },
  { id: 'radar-golpes', title: 'HUB — Radar de Golpes', category: 'Educação em segurança digital', description: 'Conteúdo organizado por tipo de golpe, fontes de consulta e quizzes com explicações para reconhecer sinais de alerta.', url: 'https://radar-de-golpes-hub.xadoondias.workers.dev/', tags: ['React', 'TypeScript', 'Cloudflare'], icon: <ShieldCheck /> },
  { id: 'honey-bee', title: 'Honey Bee', category: 'Catálogo e orçamento de cestas', description: 'Catálogo digital, painel administrativo e preparação de uma mensagem de orçamento para revisão antes de abrir o WhatsApp.', url: 'https://honey-bee-catalogo.onrender.com/', tags: ['React', 'TypeScript', 'Supabase'], icon: <Sparkles /> },
];
type Evidence = { problem: string; solution: string; flow: string[]; verification: string; links: { label: string; href: string }[]; post?: string; };
const evidence: Record<string, Evidence> = {
  'assistente-ti': {
    problem: 'Consultar registros técnicos e relembrar procedimentos exigia alternar entre planilha e ferramentas de IA.',
    solution: 'Reuni busca local, registros de OS e consulta opcional ao Gemini em uma aplicação com acesso restrito.',
    flow: ['Registros técnicos', 'Busca e recorrências', 'IA após revisão'],
    verification: 'A apresentação técnica e a publicação do projeto documentam sua origem, integrações e evolução. A demonstração abaixo usa dados fictícios e não acessa a base privada.',
    links: [{ label: 'Apresentação técnica', href: `${GITHUB}/projeto-web-ti-apresentacao` }],
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7516202206690275328/',
  },
  fraudlens: {
    problem: 'Um link pode parecer legítimo, e uma base sem resposta não confirma que ele seja seguro.',
    solution: 'Separei risco, cobertura das consultas e evidências, com resultado inconclusivo quando faltam informações.',
    flow: ['URL informada', 'Sinais e fontes', 'Resultado explicado'],
    verification: 'O repositório contém testes da API para fontes indisponíveis, relatórios antigos, limites de consulta e privacidade dos logs. São testes com serviços simulados, não uma garantia sobre qualquer link.',
    links: [{ label: 'Código da análise', href: `${GITHUB}/FraudLens/blob/main/server/main.py` }, { label: 'Testes da API', href: `${GITHUB}/FraudLens/blob/main/server/test_api.py` }],
  },
  turnoextra: {
    problem: 'Organizar serviços no calendário do celular não resolvia o acompanhamento dos valores combinados e recebidos.',
    solution: 'Criei uma agenda com recebimentos parciais, saldo pendente, relatórios e dados criptografados no navegador.',
    flow: ['Serviço registrado', 'Recebimentos parciais', 'Saldo a acompanhar'],
    verification: 'Os testes de domínio verificam recebimentos, conflitos na virada do dia, backup criptografado e exportação de calendário. Você pode experimentar um recebimento fictício na demonstração.',
    links: [{ label: 'Regras de recebimento', href: `${GITHUB}/TurnoExtra/blob/main/src/lib/receivables.ts` }, { label: 'Testes de domínio', href: `${GITHUB}/TurnoExtra/blob/main/tests/domain.test.mjs` }],
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7512629059332321280/',
  },
};
type Experience = { period: string; role: string; company: string; description: string; current?: boolean; type: string; };
const experiences: Experience[] = [
  { period: 'nov/2025 — atual', role: 'Auxiliar de Suporte de TI', company: 'Plano Santa Saúde · Hospital Infantil Gonzaga', type: 'Tempo integral · Santos/SP', current: true, description: 'Suporte N1/N2 presencial e remoto, diagnóstico de incidentes, hardware, software, redes e periféricos. Suporte ao ERP hospitalar MV SOUL, administração de usuários, perfis e permissões, apoio a cadastros e vínculos e validação das soluções com os setores.' },
  { period: 'set/2026 — atual', role: 'Suporte técnico · prestação de serviços', company: 'Atendimento às unidades da Biomega Medicina Diagnóstica', type: 'Freelance · Baixada Santista', current: true, description: 'Suporte em infraestrutura nas unidades: instalação e configuração de impressoras de rede e locais, mapeamento de unidades de rede, adequação da infraestrutura local e instalação, configuração e manutenção do sistema proprietário Biomega nas estações de trabalho.' },
  { period: 'mai/2022 — nov/2025', role: 'Auxiliar de Atendimento Pleno', company: 'Associação Santa Saúde', type: 'Atendimento e rotinas administrativas', description: 'Atendimento e apoio de primeiro nível aos sistemas hospitalares na recepção, com identificação e encaminhamento de problemas técnicos recorrentes à equipe de TI.' },
  { period: 'jan/2024', role: 'Assistente de suporte de TI', company: 'BenTech', type: 'Autônomo · Praia Grande/SP', description: 'Suporte técnico, manutenção de sistemas e atendimento interno.' },
  { period: 'fev/2019 — mai/2022', role: 'Atendente de recepção', company: 'Santa Casa de Santos', type: 'Tempo integral', description: 'Atendimento administrativo, laboratorial e de pronto-socorro, com uso de sistemas hospitalares e apoio à rotina interna.' },
  { period: 'jan/2017 — mar/2018', role: 'Auxiliar de Atendimento Interno e Externo', company: 'Exército Brasileiro · FUSEX', type: 'Experiência profissional', description: 'Apoio à área de computação e ao agendamento de serviços, desenvolvendo organização, disciplina e responsabilidade.' },
];
function External({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span></a>;
}
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
  return <header className="site-header"><div className="shell header-inner">
    <a href="#inicio" className="wordmark" onClick={() => setOpen(false)}>João Vitor<span>.</span><small>Suporte & sistemas</small></a>
    <nav className="desktop-nav" aria-label="Principal">{NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
    <External href={LINKEDIN} className="header-contact">Vamos conversar</External>
    <button className="mobile-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav id="mobile-nav" className="mobile-nav shell" aria-label="Principal no celular">{NAV.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}<ChevronRight size={15} /></a>)}</nav>}</header>;
}
function Hero() {
  return <section id="inicio" className="hero shell">
    <div className="hero-copy"><p className="eyebrow"><span /> Profissional de TI · Baixada Santista/SP</p>
      <h1>Entender o problema.<br /><span>Construir a solução.</span></h1>
      <p className="hero-description">Sou <strong>João Vitor</strong>. Atuo com suporte N1/N2, infraestrutura e o ERP hospitalar MV SOUL. Também desenvolvo aplicações web com apoio de IA, revisão do código e validação dos fluxos.</p>
      <div className="actions"><a href="#projetos" className="action primary">Explorar projetos <ArrowDown size={17} /></a><a href="#trajetoria" className="action secondary">Conhecer minha trajetória <ArrowUpRight size={16} /></a></div>
      <div className="hero-notes"><span><Network size={15} /> Suporte e acessos</span><span><Database size={15} /> Sistemas hospitalares</span><span><GraduationCap size={15} /> ADS em andamento</span></div>
    </div>
    <aside className="hero-aside" aria-label="Minha atuação"><span className="aside-label">NA PRÁTICA</span><div><BriefcaseBusiness /><h2>Da operação<br />à aplicação.</h2><p>A experiência com usuários e sistemas orienta as soluções que desenvolvo.</p></div><a href="#projetos">Conheça os projetos <ArrowUpRight size={17} /></a></aside>
  </section>;
}
function SectionTitle({ label, title, text }: { label: string; title: string; text?: string }) { return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>; }
function CaseStudy({ title }: { title: string }) {
  const s = CASE_STUDIES[title]; if (!s) return null;
  return <details className="case-study"><summary>Criação, decisões e limites <span aria-hidden="true">+</span></summary><dl>{([['Criação e evolução', s.origin], ['Decisões técnicas', s.decisions], ['Cenário ilustrativo', s.example], ['Validação', s.validation], ['Limitações', s.limits]] as const).map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl></details>;
}
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const ev = evidence[project.id];
  return <article id={project.id} className="featured-project" aria-labelledby={`${project.id}-title`}>
    <div className="project-overview"><div className="project-topline"><span className="project-index">0{index + 1}</span><span className="project-icon" aria-hidden="true">{project.icon}</span></div><p className="project-category">{project.category}</p><h3 id={`${project.id}-title`}>{project.title}</h3><p className="project-description">{project.description}</p><ul className="tags" aria-label="Tecnologias">{project.tags.map(t => <li key={t}>{t}</li>)}</ul>
      <div className="project-actions">{project.id === 'turnoextra' ? <TurnoBehindScenes /> : <ProjectBehindScenes project={project.title} />}<External className="text-link" href={project.url}>{project.id === 'assistente-ti' ? 'Ver apresentação pública' : 'Abrir aplicação'}</External></div>
    </div>
    <div className="project-evidence"><div className="project-flow" aria-label="Fluxo do projeto">{ev.flow.map((s, i) => <span key={s}><small>0{i + 1}</small>{s}{i < ev.flow.length - 1 && <ChevronRight size={14} aria-hidden="true" />}</span>)}</div>
      <div className="project-story"><div><h4>O problema</h4><p>{ev.problem}</p></div><div><h4>O que construí</h4><p>{ev.solution}</p></div></div>
      <div className="evidence-block"><h4><Check size={15} aria-hidden="true" /> Evidências para conferir</h4><p>{ev.verification}</p><div className="evidence-links">{ev.links.map(l => <External href={l.href} key={l.href}>{l.label}</External>)}{ev.post && <External href={ev.post}>Publicação no LinkedIn</External>}</div></div>
      <CaseStudy title={project.title} />
    </div>
  </article>;
}
function Projects() {
  return <section id="projetos" className="section shell"><SectionTitle label="Projetos em foco" title="Problemas reais. Soluções em evolução." text="Três projetos que conectam minha rotina, meus estudos e a aplicação prática de tecnologia. Explore a origem, as decisões e os limites de cada um." />
    <div className="featured-list">{featured.map((p, i) => <FeaturedProject project={p} index={i} key={p.id} />)}</div>
    <div className="complementary"><div className="complementary-heading"><h3>Projetos complementares</h3><p>Outras aplicações que desenvolvi para explorar necessidades diferentes.</p></div><div className="complementary-grid">{complementary.map(p => <article id={p.id} className="small-project" key={p.id}><div className="small-project-heading"><span aria-hidden="true">{p.icon}</span><span>{p.category}</span></div><h4>{p.title}</h4><p>{p.description}</p><ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul><ProjectBehindScenes project={p.title} /><CaseStudy title={p.title} /><div className="small-project-links"><External href={p.url}>Abrir projeto</External>{CASE_STUDIES[p.title]?.repo && <External href={`${GITHUB}/${CASE_STUDIES[p.title].repo}`}>{p.id === 'corretor-imoveis' ? 'Apresentação' : 'Código'}</External>}</div></article>)}</div></div>
  </section>;
}
function About() {
  const skills = [{ icon: <Network />, title: 'Suporte e infraestrutura', text: 'Atendimento presencial e remoto, diagnóstico de incidentes, estações, impressoras e conectividade.' }, { icon: <LockKeyhole />, title: 'Sistemas e acessos', text: 'Suporte ao MV SOUL, usuários, perfis, permissões e validação de soluções com os setores.' }, { icon: <Code2 />, title: 'Aplicações web', text: 'Levantamento de necessidades, integrações, desenvolvimento com IA aplicada e revisão antes da publicação.' }];
  return <section id="sobre" className="section section-divider"><div className="shell about-grid"><div><SectionTitle label="Sobre mim" title="A rotina também ensina a construir." /><p className="body-copy">Minha trajetória passou pelo atendimento hospitalar antes de chegar à equipe de TI. Conhecer os dois lados me ajuda a entender o que o usuário precisa e como um problema técnico afeta a operação.</p><p className="body-copy">Hoje atuo no Hospital Infantil Gonzaga e também presto serviços de suporte nas unidades da Biomega na Baixada Santista. Nos projetos próprios, uso IA como apoio, busco entender as decisões, reviso o código e valido os fluxos.</p><div className="location-line"><MapPin size={17} /> Baixada Santista/SP</div></div><div className="skill-list">{skills.map(s => <div key={s.title}><span aria-hidden="true">{s.icon}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div></div></section>;
}
function Education() {
  return <section id="formacao" className="section shell"><SectionTitle label="Formação" title="Aprendizado em andamento." />
    <div className="degree"><GraduationCap size={30} aria-hidden="true" /><div><p className="degree-status">GRADUAÇÃO · EM ANDAMENTO</p><h3>Tecnologia em Análise e Desenvolvimento de Sistemas</h3><p>Anhanguera Educacional</p><p className="degree-period">Janeiro de 2026 · conclusão prevista: julho de 2028</p></div></div>
    <h3 className="courses-title">Formação complementar</h3><div className="courses">{[{ title: 'Cybersecurity', institution: 'Hackers do Bem', year: '2024' }, { title: 'Administrando Banco de Dados', institution: 'Fundação Bradesco', year: '2026' }, { title: 'Tecnologia da Informação e Comunicação', institution: 'Fundação Bradesco', year: '2024' }, { title: 'Lei Geral de Proteção de Dados (LGPD)', institution: 'Fundação Bradesco', year: '2023' }].map(c => <div key={c.title}><h4>{c.title}</h4><p>{c.institution} · {c.year}</p></div>)}</div>
  </section>;
}
function Career() {
  return <section id="trajetoria" className="section section-divider"><div className="shell"><SectionTitle label="Trajetória" title="Do atendimento ao suporte de TI." text="Atuações atuais em destaque, seguidas das experiências anteriores que contribuíram para essa evolução." /><ol className="timeline">{experiences.map(e => <li key={e.role + e.company} className={e.current ? 'current' : ''}><div className="experience-date"><span>{e.period}</span>{e.current && <span className="current-badge">Atuação atual</span>}</div><div><p className="experience-type">{e.type}</p><h3>{e.role}</h3><p className="company">{e.company}</p><p>{e.description}</p></div></li>)}</ol></div></section>;
}
function Contact() { return <section id="contato" className="section shell"><div className="contact-panel"><div><p className="eyebrow">Contato</p><h2>Vamos conversar?</h2><p>Estou aberto a oportunidades em suporte de TI, sistemas e infraestrutura, além de conexões e projetos em tecnologia.</p><span className="contact-location"><MapPin size={15} /> Baixada Santista/SP</span></div><div className="contact-actions"><External href={LINKEDIN} className="action primary"><Linkedin size={18} /> Falar pelo LinkedIn</External><External href={GITHUB} className="action secondary"><Github size={18} /> Conferir meus projetos</External><p>Conheça meu perfil profissional ou explore o código e a documentação dos projetos públicos.</p></div></div></section>; }
function App() { return <div className="portfolio-root"><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero /><Projects /><About /><Education /><Career /><Contact /></main><footer className="shell site-footer"><a className="wordmark" href="#inicio">João Vitor<span>.</span></a><p>Suporte de TI · Sistemas · Aplicações web</p><div><External href={GITHUB}><Github size={16} /> GitHub</External><External href={LINKEDIN}><Linkedin size={16} /> LinkedIn</External></div></footer></div>; }
export default App;
