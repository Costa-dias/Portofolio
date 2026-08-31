import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ArrowUpRight, Terminal, Code2, Workflow, Cpu } from 'lucide-react';

const GITHUB_URL = 'https://github.com/Costa-dias';
const LINKEDIN_URL = 'https://www.linkedin.com/in/joao-vitor-tec/';

const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const;

type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'Honey Bee — Catálogo Digital Interativo',
    description:
      'Catálogo web para estabelecimentos de café da manhã, doces e panificação. Navegação simples para o cliente, cardápio digital com fotos e preços, e canal direto de pedidos via WhatsApp.',
    href: 'https://honey-bee-catalogo.onrender.com/',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Plataforma para Corretor de Imóveis',
    description:
      'Plataforma full-stack para exibição, busca e gestão de catálogo imobiliário. Listagem interativa com filtros por categoria e localização, fotos, descrições e contato direto com o corretor.',
    href: 'https://corretor-imoveis-frontend.onrender.com/',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    title: 'FraudLens — Segurança antes do clique',
    description:
      'Ferramenta anônima para verificação de links, prints e QR Codes suspeitos. Analisa URLs, lê prints e QR codes via câmera, emite veredito claro e gera denúncia anônima — sem cadastro, com histórico salvo apenas no navegador.',
    href: 'https://fraudlens-code.onrender.com/',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      <li>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de João Vitor"
          className="group flex h-12 w-12 items-center justify-center rounded-lg border border-[--line] text-[#cfc7da] opacity-80 transition-all duration-200 hover:-translate-y-1 hover:opacity-100 hover:border-[#cfc7da]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
        >
          <Github className="h-[23px] w-[23px]" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de João Vitor"
          className="group flex h-12 w-12 items-center justify-center rounded-lg border border-[--line] text-[#cfc7da] opacity-80 transition-all duration-200 hover:-translate-y-1 hover:opacity-100 hover:border-[#cfc7da]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
        >
          <Linkedin className="h-[23px] w-[23px]" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="flex items-center gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
      <span className="font-mono text-base font-normal text-[--accent-bright]">{index}</span>
      <span className="text-[--text]">{title}</span>
      <span className="ml-1 h-px flex-1 bg-[--line]" aria-hidden="true" />
    </h2>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[--bg] text-[--text]">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background:
            'radial-gradient(60% 40% at 80% 0%, rgba(194,24,91,0.12), transparent 70%), radial-gradient(50% 35% at 10% 20%, rgba(168,85,247,0.07), transparent 70%)',
        }}
      />

      <Navbar />

      {/* fixed social rail — bottom-left (desktop) */}
      <aside className="fixed bottom-0 left-6 z-20 hidden flex-col items-center gap-5 lg:flex">
        <SocialLinks className="flex-col" />
        <span
          className="w-px bg-gradient-to-b from-[--line] to-transparent"
          style={{ height: '5rem' }}
          aria-hidden="true"
        />
      </aside>

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-50 focus:rounded-md focus:bg-[--accent] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <main
        id="conteudo"
        className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-32 pt-28 sm:pt-36 lg:px-0"
      >
        <Intro />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[--line] bg-[--bg]/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Navegação principal">
        <a
          href="#sobre"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[--accent]/60 font-mono text-sm font-bold text-[--accent-bright] transition-all duration-200 hover:bg-[--accent-soft] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
          aria-label="Início — João Vitor"
        >
          JV
        </a>

        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`group relative flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2 ${
                  active === link.id
                    ? 'text-[--accent-bright]'
                    : 'text-[--muted] hover:text-[--text]'
                }`}
              >
                <span className="font-mono text-xs text-[--accent]">
                  0{i + 1}.
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Intro() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="scroll-mt-24">
      <SectionHeading index="01." title="Sobre mim" />
      <h3 id="sobre-title" className="sr-only">
        Sobre mim
      </h3>

      <div
        ref={ref}
        className={`mt-8 transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <p className="mb-2 font-mono text-sm text-[--accent-bright]">Olá, meu nome é</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">João Vitor.</h1>
        <p className="mt-3 text-2xl font-semibold text-[--muted] sm:text-4xl">
          TI &amp; Análise de Sistemas.
        </p>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-[#d6cde4] sm:text-lg">
          <p>
            Profissional de TI em transição de carreira para{' '}
            <span className="text-[--text]">Análise de Sistemas e Processos</span>. Comecei na
            recepção da Santa Casa de Santos e fui promovido à equipe de TI do Plano Santa Saúde,
            onde atuo hoje com suporte N1/N2, redes e administração de acessos no sistema MV Soul.
          </p>
          <p>
            Fora da rotina de suporte, uso JavaScript, Python e ferramentas de IA para prototipar
            soluções web e automatizar processos — é onde coloco a mão na massa pra entender
            arquitetura de software e conectar necessidade de usuário a solução técnica.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Badge icon={<Terminal className="h-4 w-4" />} label="Suporte N1/N2" />
          <Badge icon={<Workflow className="h-4 w-4" />} label="Processos" />
          <Badge icon={<Code2 className="h-4 w-4" />} label="JavaScript · Python" />
          <Badge icon={<Cpu className="h-4 w-4" />} label="Ferramentas de IA" />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[--line] bg-[--bg-soft] px-3.5 py-1.5 text-sm font-medium text-[--muted] transition-colors duration-200 hover:border-[--accent]/60 hover:text-[--text]">
      <span className="text-[--accent-bright]" aria-hidden="true">
        {icon}
      </span>
      {label}
    </span>
  );
}

function Projects() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="mt-28 scroll-mt-24 sm:mt-36"
    >
      <SectionHeading index="02." title="Projetos" />
      <h3 id="projetos-title" className="sr-only">
        Projetos
      </h3>

      <div
        ref={ref}
        className={`mt-8 space-y-5 transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`group list-none rounded-xl border border-[--line] bg-[--panel]/60 p-5 transition-[transform,box-shadow,border-color,background-color,opacity] duration-300 ease-out hover:-translate-y-2 hover:border-[--accent]/70 hover:bg-[--panel] hover:shadow-[0_16px_40px_-12px_rgba(194,24,91,0.45)] sm:p-6 ${shown ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4 focus-visible:rounded-xl"
        aria-label={`Acessar o projeto ${project.title}`}
      >
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-semibold text-[--text] transition-colors duration-200 group-hover:text-[--accent-bright] sm:text-xl">
            {project.title}
          </h4>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-[--dim] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[--accent-bright]"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm leading-relaxed text-[#d6cde4] sm:text-base">
          {project.description}
        </p>
        <div className="mt-1 flex items-center gap-2 font-mono text-xs text-[--accent-bright]">
          <span aria-hidden="true">🔗</span>
          <span className="truncate transition-colors group-hover:underline">
            {project.href.replace(/^https?:\/\//, '')}
          </span>
        </div>
        <ul className="mt-1 flex flex-wrap gap-2" aria-label="Tecnologias">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-[--line] bg-[--bg-soft] px-2.5 py-1 font-mono text-xs text-[--muted] transition-colors duration-200 group-hover:border-[--accent]/40 group-hover:text-[--text]"
            >
              {t}
            </li>
          ))}
        </ul>
      </a>
    </li>
  );
}

function Contact() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="mt-28 scroll-mt-24 sm:mt-40"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <p className="mb-4 font-mono text-sm text-[--accent-bright]">03.</p>
        <h2 id="contato-title" className="text-3xl font-bold tracking-tight sm:text-5xl">
          Vamos conversar.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#d6cde4] sm:text-lg">
          Aberto a novas oportunidades em análise de sistemas/desenvolvimento e dados. Todo
          feedback é bem-vindo!
        </p>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-[--line]">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left lg:pl-0">
        <p className="font-mono text-xs text-[--dim]">
          Desenvolvido &amp; mantido por João Vitor
        </p>
        <SocialLinks className="lg:hidden" />
      </div>
    </footer>
  );
}
