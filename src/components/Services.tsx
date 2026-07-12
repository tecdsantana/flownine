import React from 'react';
import { Database, LayoutDashboard, Users, Brain } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const services = [
  {
    icon: Database,
    title: 'Governança & Arquitetura de Dados',
    description:
      'Estruturamos arquiteturas de dados escaláveis e frameworks de governança, elevando qualidade, consistência e acesso a dados críticos de Finanças, Operações e RH — com reduções de processamento de horas para minutos.',
  },
  {
    icon: LayoutDashboard,
    title: 'BI & Analytics Engineering',
    description:
      'Migramos processos manuais em planilhas para dashboards em tempo real (Power BI, QuickSight, Grafana), automatizando relatórios e dando visibilidade instantânea para decisões de negócio.',
  },
  {
    icon: Users,
    title: 'People Analytics',
    description:
      'Desenvolvemos modelos preditivos de turnover, análises de engajamento e pesquisas de clima com NLP, apoiando decisões estratégicas de gestão de pessoas em operações multi-país.',
  },
  {
    icon: Brain,
    title: 'IA Generativa & Machine Learning aplicado a negócios',
    description:
      'Aplicamos LLMs, RAG e modelos de ML a problemas reais de negócio — de alinhamento estratégico de metas a precificação e detecção de risco — gerando resultados mensuráveis em escala.',
  },
];

const Services = () => {
  const headingReveal = useScrollReveal<HTMLDivElement>();
  const gridReveal = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicos" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div ref={headingReveal} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serviços</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mais de uma década estruturando dados, analytics e IA para grandes empresas.
          </p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card"
            >
              <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
                <Icon className="h-6 w-6 text-automato-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
              <p className="text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
