import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Coffee,
  Database,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Network,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
  X,
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/Costa-dias';
const LINKEDIN_URL = 'https://www.linkedin.com/in/joao-vitor-tec/';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

type Project = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'FraudLens',
    description:
      'Plataforma criada para ajudar usuários a identificar possíveis golpes e fraudes antes de interagir com links, imagens, QR Codes e outros conteúdos suspeitos.',
    url: 'https://fraudlens-code.onrender.com/',
    icon: <ShieldCheck size={22} />,
    tags: ['Segurança', 'IA aplicada', 'Web', 'API'],
  },
  {
    title: 'Dashboard Finanças',
    description:
      'Aplicação para controle financeiro pessoal, com dashboard, categorias, gráficos, lançamentos e recursos voltados à privacidade dos dados.',
    url: 'https://dashboard-financas-rfv6.onrender.com/',
    icon: <WalletCards size={22} />,
    tags: ['React', 'TypeScript', 'Dashboard', 'Segurança'],
  },
  {
    title: 'TurnoExtra',
    description:
      'Sistema para organização e gerenciamento de serviços e plantões, pensado para facilitar o controle de escalas e informações operacionais.',
    url: 'https://gestao-de-plantao.onrender.com/',
    icon: <CalendarDays size={22} />,
    tags: ['Web', 'Gestão', 'Automação', 'Supabase'],
  },
  {
    title: 'Plataforma para Corretor de Imóveis',
    description:
      'Solução web voltada para apresentação e organização de imóveis, facilitando a divulgação e o contato com potenciais clientes.',
    url: 'https://corretor-imoveis-frontend.onrender.com/',
    icon: <Building2 size={22} />,
    tags: ['Web', 'Frontend', 'UX', 'Negócios'],
  },
  {
    title: 'HUB — Radar de Golpes',
    description:
      'Projeto focado em centralizar informações e referências relacionadas a golpes, fraudes e segurança digital.',
    url: 'https://radar-de-golpes-hub.xadoondias.workers.dev/',
    icon: <Radar size={22} />,
    tags: ['Cybersecurity', 'Informação', 'Web'],
  },
  {
    title: 'Honey Bee',
    description:
      'Catálogo digital interativo desenvolvido para apresentar produtos de forma simples, visual e acessível ao cliente.',
    url: 'https://honey-bee-catalogo.onrender.com/',
    icon: <Coffee size={22} />,
    tags: ['Web', 'Catálogo', 'Frontend'],
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('sobre');

  useEffect(() => {
    const sections = NAV_LINKS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={'flex items-center gap-3 ' + className}>
      <li>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
        >
          <Github size={18} />
        </a>
      </li>

      <li>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
        >
          <Linkedin size={18} />
        </a>
      </li>
    </ul>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div data-reveal className="mb-12 max-w-3xl reveal">
      <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
        <span className="h-px w-7 bg-cyan-400" />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-200 selection:bg-cyan-400/30 selection:text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #070b12;
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .grid-background {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .glow {
          box-shadow:
            0 0 0 1px rgba(34,211,238,0.08),
            0 0 60px rgba(34,211,238,0.06);
        }

        .text-gradient {
          background: linear-gradient(
            90deg,
            #67e8f9,
            #22d3ee,
            #a5f3fc
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <Navbar />

      <main>
        <Intro />
        <Sobre />
        <Trajetoria />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#070b12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            <Rocket size={19} />
          </div>

          <div>
            <p className="text-sm font-bold text-white">João Vitor</p>
            <p className="text-[11px] text-slate-500">Profissional de TI</p>
          </div>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((item) => {
              const id = item.href.replace('#', '');
              const active = activeSection === id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={
                      'relative text-sm transition ' +
                      (active
                        ? 'text-cyan-300'
                        : 'text-slate-400 hover:text-white')
                    }
                  >
                    {item.label}

                    {active && (
                      <span className="absolute -bottom-2 left-0 h-px w-full bg-cyan-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <SocialLinks />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#070b12]/95 px-5 py-5 md:hidden">
          <nav>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="mt-4" />
        </div>
      )}
    </header>
  );
}

function Intro() {
  return (
    <section
      id="inicio"
      className="grid-background relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <div
            data-reveal
            className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            Profissional de TI • Santos/SP
          </div>

          <h1
            data-reveal
            className="reveal text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Tecnologia para
            <br />
            <span className="text-gradient">resolver problemas.</span>
          </h1>

          <p
            data-reveal
            className="reveal mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            Profissional de TI focado na resolução de problemas, atuando desde
            o suporte técnico até o desenvolvimento de soluções.
          </p>

          <div data-reveal className="reveal mt-9 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Ver projetos
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
            >
              Entrar em contato
            </a>
          </div>

          <div
            data-reveal
            className="reveal mt-14 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              Suporte N1/N2
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              Redes e acessos
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              Desenvolvimento Web
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              Automação
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-600 sm:flex">
          <span>Role para explorar</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  const skills = [
    {
      icon: <UserRound size={19} />,
      title: 'Suporte N1/N2',
      text: 'Atendimento presencial e remoto, diagnóstico e resolução de incidentes.',
    },
    {
      icon: <Network size={19} />,
      title: 'Redes e acessos',
      text: 'Rotinas de rede, permissões, acessos e suporte à infraestrutura.',
    },
    {
      icon: <Database size={19} />,
      title: 'Sistemas e dados',
      text: 'Atuação com sistemas corporativos, banco de dados e análise de processos.',
    },
    {
      icon: <Sparkles size={19} />,
      title: 'Desenvolvimento',
      text: 'Criação de aplicações web e soluções com IA aplicada.',
    },
  ];

  const courses = [
    {
      icon: <ShieldCheck size={18} />,
      title: 'Cybersecurity',
      institution: 'Hackers do Bem • 2024',
    },
    {
      icon: <Database size={18} />,
      title: 'Análise de Dados e Administração de Banco de Dados',
      institution: 'Fundação Bradesco • 2025–2026',
    },
    {
      icon: <BriefcaseBusiness size={18} />,
      title: 'Projetos e Sistemas de TI',
      institution: 'Fundação Bradesco • 2025',
    },
    {
      icon: <LockKeyhole size={18} />,
      title: 'LGPD',
      institution: 'Fundação Bradesco • 2023',
    },
  ];

  return (
    <section id="sobre" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Quem é João Vitor?"
          description="Profissional de TI focado na resolução de problemas, atuando desde o suporte técnico até o desenvolvimento de soluções."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div data-reveal className="reveal">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 glow">
              <p className="text-base leading-8 text-slate-300">
                Atuo com{' '}
                <strong className="font-semibold text-white">
                  suporte N1/N2 presencial e remoto
                </strong>
                , redes, administração de acessos e permissões e suporte ao
                sistema hospitalar MV Soul.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Também atuo com{' '}
                <strong className="font-semibold text-white">
                  desenvolvimento web com IA aplicada
                </strong>
                , análise de requisitos e processos e automação de processos,
                buscando sempre soluções mais eficientes para as necessidades
                do negócio.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
                <MapPin size={17} className="text-cyan-400" />
                Santos, São Paulo — Brasil
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="reveal grid gap-4 sm:grid-cols-2"
          >
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-white">{skill.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="reveal mt-16">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap size={20} className="text-cyan-300" />

            <div>
              <h3 className="text-xl font-bold text-white">
                Formação complementar
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Conhecimentos selecionados que complementam minha atuação em TI.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/20"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  {course.icon}
                </div>

                <h4 className="text-sm font-semibold leading-5 text-white">
                  {course.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {course.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Milestone = {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: ReactNode;
};

const TRAJETORIA: Milestone[] = [
  {
    period: '2017 – 2018',
    title: 'Exército Brasileiro',
    company: 'Experiência profissional',
    description:
      'Experiência marcada por disciplina, responsabilidade, trabalho em equipe e atuação sob pressão.',
    icon: <BriefcaseBusiness size={19} />,
  },
  {
    period: '2020 – 2022',
    title: 'Atuação em TI',
    company: 'Santa Casa de Santos',
    description:
      'Experiência profissional em ambiente de saúde, desenvolvendo base prática em suporte e atendimento de usuários.',
    icon: <Building2 size={19} />,
  },
  {
    period: '2022 – 2025',
    title: 'Suporte de TI',
    company: 'Plano Santa Saúde',
    description:
      'Atuação com suporte técnico, sistemas, usuários e rotinas de tecnologia em ambiente corporativo.',
    icon: <Network size={19} />,
  },
  {
    period: '2025 – atual',
    title: 'Suporte de TI N1/N2',
    company: 'Plano Santa Saúde',
    description:
      'Atuação com suporte presencial e remoto, redes, impressoras, acessos, permissões e sistema hospitalar MV Soul.',
    icon: <Rocket size={19} />,
  },
  {
    period: '2026 – 2028',
    title: 'Análise e Desenvolvimento de Sistemas',
    company: 'Anhanguera',
    description:
      'Formação acadêmica em andamento, ampliando conhecimentos em desenvolvimento, análise de sistemas e tecnologia.',
    icon: <GraduationCap size={19} />,
  },
];

function Trajetoria() {
  return (
    <section id="trajetoria" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência que constrói repertório."
          description="Uma trajetória que conecta experiência prática, suporte de TI e formação em desenvolvimento e análise de sistemas."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {TRAJETORIA.map((item, index) => (
              <div
                key={item.period + item.title}
                data-reveal
                className="reveal relative pl-14"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-[#070b12] text-cyan-300">
                  {item.icon}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/20">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                        {item.period}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-400">
                        {item.company}
                      </p>
                    </div>

                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500">
                      <CalendarDays size={13} />
                      Experiência
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-400">
      {children}
    </span>
  );
}

function Projects() {
  return (
    <section id="projetos" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos que mostram na prática."
          description="Soluções desenvolvidas para resolver problemas reais, explorar tecnologia e transformar ideias em aplicações funcionais."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      data-reveal
      className="reveal group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-300">
          {project.icon}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${project.title}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-300"
        >
          <ArrowUpRight size={17} />
        </a>
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
      >
        Acessar projeto
        <ArrowUpRight size={15} />
      </a>
    </article>
  );
}

function Contact() {
  return (
    <section id="contato" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div data-reveal className="reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <Mail size={15} />
            Contato
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Vamos conversar?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Estou aberto a oportunidades, projetos e conexões profissionais
            na área de tecnologia.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">
            João Vitor
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Profissional de TI • Suporte • Infraestrutura • Análise de Sistemas
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SocialLinks />

          <span className="hidden h-5 w-px bg-white/10 sm:block" />

          <p className="text-xs text-slate-600">
            created for: Costa-Dias
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
