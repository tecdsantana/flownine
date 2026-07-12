import React from 'react';
import { BarChart3, Bot, Compass, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const pillars = [
  {
    icon: BarChart3,
    title: 'Visualização e análise',
    items: [
      'Dashboards interativos',
      'Business Analytics',
      'Análises de estatísticas descritivas',
      'Relatórios e dashboards estáticos',
    ],
  },
  {
    icon: Bot,
    title: 'Agentic & GenAI',
    items: [
      'Personalização, treinamento e implantação de LLMs',
      'Otimização de LLM com RAG',
    ],
  },
  {
    icon: Compass,
    title: 'AI Discovery',
    items: [
      'AI readiness assessment',
      'Análise de fontes de dados',
      'Roadmap de oportunidades de IA',
    ],
  },
];

const DataAIPillars = () => {
  const headingReveal = useScrollReveal<HTMLDivElement>();
  const gridReveal = useScrollReveal<HTMLDivElement>();

  return (
    <section id="data-ai" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div ref={headingReveal} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossa atuação em Data&amp;AI</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card"
            >
              <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
                <Icon className="h-6 w-6 text-automato-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataAIPillars;
