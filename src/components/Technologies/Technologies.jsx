const Technologies = () => {
  const techs = [
    { name: 'React', icon: '/assets/techs/react.svg' },
    { name: 'TypeScript', icon: '/assets/techs/typescript.svg' },
    { name: 'Node.js', icon: '/assets/techs/nodejs.svg' },
    { name: 'Next.js', icon: '/assets/techs/nextjs.svg' },
    { name: 'Tailwind', icon: '/assets/techs/tailwindcss.svg' },
    { name: 'PostgreSQL', icon: '/assets/techs/postgresql.svg' },
    { name: 'Docker', icon: '/assets/techs/docker.svg' },
    { name: 'AWS', icon: '/assets/techs/aws.svg' }
  ];

  return (
    <section className="py-20 bg-brand-darker/50 border-y border-brand-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 mb-8">Tecnologías que dominamos</h2>
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...techs, ...techs].map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-4 mx-12 group/tech">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 grayscale opacity-60 group-hover/tech:grayscale-0 group-hover/tech:opacity-100 transition-all duration-300" />
                <span className="text-slate-800 font-bold text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
