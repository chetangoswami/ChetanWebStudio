import { notFound } from 'next/navigation';
import worksData from '../../../data/works.json';
import Link from 'next/link';

export function generateStaticParams() {
  return worksData.map((work) => ({
    slug: work.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = worksData.find((w) => w.slug === params.slug);
  if (!project) {
    return { title: 'Project Not Found | Chetan Web Studio' };
  }
  return {
    title: `${project.title} | Chetan Web Studio`,
    description: `Read the case study on how Chetan Web Studio engineered ${project.client}.`,
    openGraph: {
      title: `${project.title} | Chetan Web Studio`,
      description: `Read the case study on how Chetan Web Studio engineered ${project.client}.`,
      url: `https://chetanwebstudio.com/work/${project.slug}`,
      type: 'article',
    }
  };
}

export default function WorkDetail({ params }) {
  const project = worksData.find((w) => w.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "creator": {
      "@type": "Organization",
      "name": "Chetan Web Studio"
    },
    "genre": "Web Development & WebGL Design",
    "url": `https://chetanwebstudio.com/work/${project.slug}`,
    "image": `https://chetanwebstudio.com/images/work/${project.slug}.jpg`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <div className="min-h-screen bg-[#050505] text-[#F2F2F2] font-sans selection:bg-[#F2F2F2] selection:text-[#050505]">
        
        {/* SECTION 1: MASTHEAD & METADATA */}
        <section className="min-h-screen flex flex-col pt-32 pb-16 px-4 md:px-8 border-b border-[#2A2A2A]">
          <div className="flex-grow flex items-end mb-16">
            <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter font-heading w-full md:w-[75%]">
              {project.title}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 border-t border-[#2A2A2A]">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A]">
              <p className="text-[#A0A0A0] text-xs font-bold uppercase tracking-widest mb-2 font-mono">Client</p>
              <p className="text-xl md:text-2xl font-bold uppercase">{project.client}</p>
              <p className="text-[#888] text-sm mt-1">{project.clientDesc}</p>
            </div>
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A]">
              <p className="text-[#A0A0A0] text-xs font-bold uppercase tracking-widest mb-2 font-mono">Platform</p>
              <p className="text-xl md:text-2xl font-bold uppercase">{project.platform}</p>
              <p className="text-[#888] text-sm mt-1">{project.platformDesc}</p>
            </div>
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A]">
              <p className="text-[#A0A0A0] text-xs font-bold uppercase tracking-widest mb-2 font-mono">Role</p>
              <p className="text-xl md:text-2xl font-bold uppercase">{project.role}</p>
              <p className="text-[#888] text-sm mt-1">{project.roleDesc}</p>
            </div>
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A]">
              <p className="text-[#A0A0A0] text-xs font-bold uppercase tracking-widest mb-2 font-mono">Timeline</p>
              <p className="text-xl md:text-2xl font-bold uppercase">{project.timeline}</p>
            </div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-6 md:p-8 flex items-center justify-center bg-[#050505] hover:bg-[#F2F2F2] text-[#F2F2F2] hover:text-[#050505] transition-colors duration-[0ms] cursor-pointer">
              <span className="text-sm md:text-lg font-bold font-mono tracking-widest uppercase text-center">
                [ VISIT LIVE SITE ↗ ]
              </span>
            </a>
          </div>
        </section>

        {/* SECTION 2: THE FRICTION */}
        <section className="w-full border-b border-[#2A2A2A]">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#2A2A2A] p-8 md:p-12 md:sticky md:top-0 h-fit">
              <h2 className="text-[clamp(2rem,4vw,4rem)] font-black uppercase leading-[0.9] font-heading">
                System<br/>Bottlenecks
              </h2>
            </div>
            <div className="md:col-span-8">
              {project.bottlenecks.map((item, idx) => (
                <div key={item.id} className={`p-8 md:p-16 ${idx !== project.bottlenecks.length - 1 ? 'border-b border-[#2A2A2A]' : ''} hover:bg-[#111] transition-colors duration-[0ms]`}>
                  <span className="text-4xl md:text-6xl font-black text-[#333] font-mono mb-4 block">{item.id}</span>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase mb-4">{item.title}</h3>
                  <p className="text-[#A0A0A0] text-xl leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 & 4: THE ARCHITECTURE & DEEP DIVE */}
        <section className="w-full border-b border-[#2A2A2A] bg-[#0A0A0A]">
          <div className="p-8 md:p-12 border-b border-[#2A2A2A]">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-black uppercase leading-[0.9] font-heading">The Architecture</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {project.architecture.map((phase, idx) => (
              <div key={idx} className={`p-8 md:p-12 ${idx % 2 === 0 ? 'border-b md:border-b-0 md:border-r border-[#2A2A2A]' : ''}`}>
                <h3 className="text-[#F2F2F2] text-sm font-bold tracking-widest uppercase mb-8 font-mono border border-[#2A2A2A] inline-block px-4 py-2 bg-[#050505]">{phase.phaseTitle}</h3>
                <ul className="space-y-4 font-mono text-[#A0A0A0] text-sm md:text-base">
                  {phase.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start"><span className="text-[#FF3333] mr-4">→</span> {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: THE IMPACT */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#2A2A2A]">
            {project.kpis.map((kpi, idx) => (
              <div key={idx} className={`p-8 md:p-12 ${idx !== project.kpis.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#2A2A2A]' : ''} flex flex-col justify-center`}>
                <h4 className="text-sm font-mono tracking-widest uppercase text-[#FF3333] mb-4">{kpi.id}</h4>
                <h3 className="text-2xl md:text-3xl font-black uppercase font-heading">{kpi.title}</h3>
                <p className="mt-4 text-[#A0A0A0]">{kpi.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="p-12 md:p-24 bg-[#050505] flex items-center justify-center border-b border-[#2A2A2A]">
            <blockquote 
              className="text-3xl md:text-6xl font-black font-heading leading-[1.1] text-center max-w-5xl uppercase tracking-tighter"
              dangerouslySetInnerHTML={{ __html: project.quote }}
            />
          </div>
        </section>
        
        {/* SECTION 6: LIVE SITE CLIMAX */}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#050505] text-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-[#050505] transition-colors duration-[0ms] border-b border-[#2A2A2A] py-24 md:py-48 px-4 text-center cursor-pointer">
          <h2 className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter font-heading">
            VISIT LIVE<br/>SITE ↗
          </h2>
        </a>
        
        {/* NEXT PROJECT NAV */}
        <section className="flex p-8 items-center justify-between">
          <Link href="/work" className="text-sm font-bold font-mono uppercase tracking-widest hover:text-[#FF3333] transition-colors">
            ← Back to Archive
          </Link>
        </section>

      </div>
    </>
  );
}
