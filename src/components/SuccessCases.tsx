import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import naturaRetencaoImg from '@/assets/cases/natura-retencao.jpg';
import picpayDataImg from '@/assets/cases/picpay-data.jpg';
import naturaMetasImg from '@/assets/cases/natura-metas.jpg';

// Fotos: Wikimedia Commons, licença CC BY / CC BY-SA
// - Dennis G. Jarvis, "France-002800 - Perfume Factory"
// - BalticServers.com, "BalticServers data center"
// - Rawpixel Ltd, "Business people discussing in the cafe"
const cases = [
  {
    id: 'natura-retencao',
    badge: 'NATURA &CO',
    title: 'IA Preditiva para Retenção de Talentos.',
    description:
      'Modelo preditivo identifica colaboradores com maior risco de saída — e o motivo. RH passa a agir com semanas de antecedência, em vez de descobrir no aviso prévio.',
    stats: '+1.500 colaboradores monitorados · risco previsto mensalmente · ações de retenção antes do desligamento',
    image: naturaRetencaoImg,
    imagePosition: 'object-center',
  },
  {
    id: 'picpay-dados',
    badge: 'PICPAY',
    title: 'Democratização de Dados de RH.',
    description:
      'Centralizamos, normalizamos e limpamos as bases de RH em um banco de dados único, com dashboards disponibilizados para executivos das áreas e para o RH como um todo.',
    stats: '+100 pessoas acessando dados · ganho de performance nos relatórios · análises dedicadas para cada área',
    image: picpayDataImg,
    imagePosition: 'object-center',
  },
  {
    id: 'natura-metas',
    badge: 'NATURA &CO',
    title: 'Alinhamento Estratégico de Metas com IA.',
    description:
      'Análise semântica de mais de 80 mil metas de colaboradores, medindo a aderência de cada meta à estratégia da empresa e ao objetivo do gestor direto.',
    stats: '+80.000 metas analisadas · aderência estratégica de 62% para 80% · colaborador e gestor na mesma página',
    image: naturaMetasImg,
    imagePosition: 'object-[center_25%]',
  },
];

const SuccessCases = () => {
  const headingReveal = useScrollReveal<HTMLDivElement>();
  const gridReveal = useScrollReveal<HTMLDivElement>();

  return (
    <section id="solucoes" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div ref={headingReveal} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Como entregamos valor com dados e IA</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Alguns dos resultados que já entregamos em projetos reais de dados, analytics e IA.
          </p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map(({ id, badge, title, description, stats, image, imagePosition }) => (
            <div
              key={id}
              className="rounded-2xl overflow-hidden border border-automato-gold/20 bg-automato-dark-blue/40 futuristic-card hover:gold-glow transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className={`w-full h-full object-cover ${imagePosition}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-automato-black via-automato-black/10 to-transparent" />
                <div className="absolute inset-0 bg-automato-black/20" />
              </div>
              <div className="p-8">
                <span className="inline-block text-xs tracking-widest text-automato-gold border border-automato-gold/40 rounded-full px-3 py-1 font-mono mb-4">
                  {badge}
                </span>
                <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-white/70 mb-6">{description}</p>
                <div className="flex items-start gap-2 bg-automato-black/60 border border-automato-gold/20 rounded-lg p-4">
                  <TrendingUp className="h-4 w-4 text-automato-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
